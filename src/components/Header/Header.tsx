import React from 'react';
import { IconContext } from 'react-icons';
import s from './Header.module.css'

const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <h6 className={s.pageTitle}>Profile Page</h6>
                <div className={s.headerIcons}>
                    <IconContext.Provider value={{size: '1.6em', color: '#fff'}}>


                    </IconContext.Provider>
                </div>
            </header>
        </div>
    );
};

export default Header;