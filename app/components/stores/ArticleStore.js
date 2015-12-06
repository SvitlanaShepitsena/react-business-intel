import alt from '../alt';
import Actions from '../actions/actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import _ from 'lodash';

@decorate(alt)
class ArticleStore {
  constructor(){
    this.state = {
      title: ''
    };
  }

  @bind(Actions.update)
  update(event){
    this.setState({
      title: event.target.value
    });
  }

}

export default alt.createStore(ArticleStore);
