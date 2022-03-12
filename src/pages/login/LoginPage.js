import React, { useState }  from 'react';
import loginImg from '../../assets/login-img.jpg';

import DashBoardPage from '../dashboard/DashBoardPage';

import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../libs/firebase';


import './styles.scss';

function LoginPage(props){

    const navigator = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    function onHandleSignIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials =>{
            navigator('dashboard');
        })
        .catch(erro => {

        })

    }
   

    return (

        <>
        
            <div className="full-page-container" >
                <div className="login-container">
                    
                    <div className="login-img-container">
                        
                    </div>

                    <div className="login-form">
                        <h2>Sign In</h2>
                        <p>Pleae log in to continue</p>

                        <form onSubmit={onHandleSignIn}>
                            <label>
                                Email: 
                                <input type="email" name="email" placeholder="johndoe@email.com" onChange={(e) => setEmail(e.target.value)}/>
                            </label>

                            <label>
                                Password:
                                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                            </label>

                            <input type="submit" value="Sign In"/>
                        </form>

                    </div>
                </div>
            </div>
            
        </>

    );
}

export default LoginPage;