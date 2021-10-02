import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ConfigContext } from '../../../../contexts/ConfigContext';
import * as actionType from '../../../../store/actions';
import logotipo from '../../../../assets/images/logotipo.png';

const NavLogo = () => {
    const configContext = useContext(ConfigContext);
    const { collapseMenu } = configContext.state;
    const { dispatch } = configContext;

    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <React.Fragment>
            <div className="navbar-brand header-logo">
                <Link to="#" className="b-brand">
                    <div className="b-bg">
                        <img src={logotipo} className="logotipo" alt="Glicemap"/>
                    </div>
                    <span className="b-title-1">GLICE</span><span className="b-title-2">MAP</span>
                    <span className="b-subtitle">{"\n"}Controle glicêmico na era digital</span>
                </Link>
                <Link
                    to="#"
                    className={toggleClass.join(' ')}
                    id="mobile-collapse"
                    onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}
                >
                    <span />
                </Link>
            </div>
        </React.Fragment>
    );
};

export default NavLogo;
