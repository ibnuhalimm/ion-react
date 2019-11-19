import React from 'react';
import { IonRouterLink } from '@ionic/react';
import { withRouter } from 'react-router';

import './Menu.scss';

const Menu = (props: any) => {
    return (
        <div>
            <div className="col col-50">
                <IonRouterLink routerLink={ props.page }>
                    <button className="btn-menu">
                        <span className="icon lh60">
                            { props.children }
                        </span>
                        <span className="text">
                            { props.text }
                        </span>
                    </button>
                </IonRouterLink>
            </div>
        </div>
    );
}

export default withRouter(Menu);