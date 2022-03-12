import React from 'react';

import './styles.scss';

import {SideBarData} from './SideBarData';

function SideBar(){

    return (

        <div className='sidebar'>
            <div className='brand-name'>
                <h2>Soul Kickz</h2>
            </div>

            <div className='icons-container'>
                <ul>
                    {SideBarData.map((val, key) => {
                        return <li key={key}>
                            <div className='logo-container'>{val.icon}</div>
                            <div>{val.title}</div>
                        </li>
                    })}
                </ul>
            </div>
            
            
        </div>

    );

}


export default SideBar;