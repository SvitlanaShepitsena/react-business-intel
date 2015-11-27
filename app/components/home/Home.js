import React from 'react';
import Toolbar from '../common/Toolbar';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Toolbar title="Home component"/>
                <div style={styles.containerStyles}>
                    <p style={styles.pStyles}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                        dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                        soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                        possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
                        aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
                </div>
            </div>
        )
    }
}
;
var styles = {
    containerStyles: {
        backgroundColor: 'whitesmoke',
        display: 'block',
        height: 'auto'
    },
    pStyles: {
        display: 'block',
        fontSize: 14,
        lineHeight: 2,
        paddingLeft: 20
    },
};
