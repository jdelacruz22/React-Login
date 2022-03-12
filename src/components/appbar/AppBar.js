import React from "react";

import {MdSettings, MdNotificationsNone, MdOutlineEmail, MdAccountCircle} from 'react-icons/md';


import { signOut } from "firebase/auth";
import {auth} from '../../libs/firebase';

import './styles.scss';

function AppBar(){

    function onLogOutRequest(e){
        signOut(auth);
    }

    return (

        <>
        
            <header>

                <div className="inner-container">
                    <ul>
                        <li onClick={onLogOutRequest}>Sign Out</li>
                        <li><MdSettings/></li>
                        <li><MdNotificationsNone/></li>
                        <li><MdAccountCircle /></li>
                        <li><MdOutlineEmail /></li>
                    </ul>

                </div>

            </header>

        </>
    );

}

export default AppBar;