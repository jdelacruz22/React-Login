
import React, {useState} from 'react';
import SideBar from '../../components/sidebar/SideBar';
import AppBar from '../../components/appbar/AppBar';
import Panel from '../../components/panel/Panel';

import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../../libs/firebase';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate } from 'react-router-dom';

function DashBoardPage(){

    const [isUser, setIsUser] = useState(true);
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if(user){
            setIsUser(true);
        }
        else{
            setIsUser(false);
            navigator('/');
        }
    })

    if(isUser){
        return(
            <>
            <AppBar />
            <SideBar />
            <Panel />
            </>
        );
        
        
    }
    else{
        return null;
    }

}

export default DashBoardPage;