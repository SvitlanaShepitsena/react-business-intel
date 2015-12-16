import Actions from '../actions/actions';
/*Database*/
import Firebase from 'firebase';

let firebaseRef = null;

let ArticleSource = {
    getArticles: {
        remote(state){

            if (firebaseRef) {
                firebaseRef.off();
            }

            firebaseRef = new Firebase('https://chicagowepapp.firebaseio.com/articles');
            return new Promise((resolve, reject) => {
                firebaseRef.once("value", (dataSnapshot) => {

                    var articles = dataSnapshot.val();
                    resolve(articles);

                    setTimeout(()=> {
                        firebaseRef.on("child_added", ((msg) => {
                            let artVal = msg.val();
                            artVal.key = msg.key();
                            Actions.articleReceived(artVal);
                        }));
                    }, 10);

                })
            });
        },
        success: Actions.articlesReceived,
        error: Actions.articlesFailed,
        loading: Actions.articlesLoading
    }
}

export default ArticleSource;
