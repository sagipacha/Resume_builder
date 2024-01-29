import React, { useContext, useState } from 'react';
import { UserContext } from '../../components/Context/user';
import LogIn from '../../components/LogIn/LogIn';
import SignUp from '../../components/SignUp/SignUp';

function Auth() {
    const { user, register, login, logout } = useContext(UserContext);
    const [formDatasSignUp, setFormDatasSignUp] = useState([]);
    const [formDatasLogIn, setFormDatasLogIn] = useState([]);
    const [formDataSignUp, setFormDataSignUp] = useState({});
    const [formDataLogIn, setFormDataLogIn] = useState({});
    const [logOrSign, setLogOrSign] = useState(false);

    const handleInputChangeRegister = (e) => {
        setFormDataSignUp({ ...formDataSignUp, [e.target.name]: e.target.value });
    }

    const handleInputChangeLogIn = (e) => {
        setFormDataLogIn({ ...formDataLogIn, [e.target.name]: e.target.value });
    }

    const submitFormRegister = (e) => {
        e.preventDefault();
        console.log(formDataSignUp);
        setFormDatasSignUp([...formDatasSignUp, { ...formDataSignUp }]);
        register(formDataSignUp.email, formDataSignUp.password1);
    }

    const submitFormLogIn = (e) => {
        e.preventDefault();
        console.log(formDataLogIn);
        setFormDatasLogIn([...formDatasLogIn, { ...formDataLogIn }]);
        login(formDataLogIn.email, formDataLogIn.password);
    }

    return (
        <div>
            {logOrSign ?
                <div>
                    <SignUp 
                        handleInputChangeRegister={handleInputChangeRegister}
                        submitFormRegister={submitFormRegister}
                    />
                    <p>Have an account?</p>
                    <p className="lgin-signup" onClick={() => setLogOrSign(!logOrSign)}>Log in</p>
                </div>
                :
                <div>
                    <LogIn
                        handleInputChangeLogIn={handleInputChangeLogIn}
                        submitFormLogIn={submitFormLogIn}
                    />
                    <p>Don't have an account? </p>
                    <p className="lgin-signup" onClick={() => setLogOrSign(!logOrSign)}>Sign up</p>
                </div>
            }
        </div>
    )
}

export default Auth;