import React from "react";
import { useState } from "react";
import LoginManager from "../../Utility/LoginManager";
import MainScreen from "../MainScreen";
import RegisterScreen from "../SignUpScreen/SignUpScreen";
import "./LoginScreen.css";
import Particles from "../../Particles";


const LoginScreen = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [regState, setRegState] = useState(false);
  const [logState, setLogState] = useState(false);

  const exitHandler = () => {
    setEnteredUsername("");
    setEnteredPassword("");
    setLogState(false);
  };

  if (regState)
    return <RegisterScreen clickOnGeri={() => setRegState(false)} />;

  return logState === false ? (

    <div className="lgn-main">
      <div className="lgn-sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src="img/Profile.png" alt="profile" className="lgn-profile" />
            </div>
          </div>

          <div>
            <h1>Oturum Aç </h1>
            <div className="input-icons">
            <i class="fa fa-user icon"></i>       
              <input className="name" type="text" value={enteredUsername}
              onChange={(event) => setEnteredUsername(event.target.value)} placeholder="Kullanıcı Adı"  />
            </div>

            <div className="input-icons">
            <i class="fa fa-key icon"> </i>
              <input className="name" type="password" value={enteredPassword}
              onChange={(event) => setEnteredPassword(event.target.value)} placeholder="Şifre"  />
            </div>
          
            <div className="buttons">
              <button
                className="lgn-button"
                onClick={() =>
                  setLogState(LoginManager(enteredUsername, enteredPassword))
                }
              >Giriş Yap
              </button>

              <button 
              className="lgn-button" 
              onClick={() => setRegState(true)}
              >Kayıt Ol
              </button>

            </div>
         
          </div>
        </div>
      </div>
      <Particles />
    </div>
  ) : (
    <MainScreen onLogoutClick={exitHandler} />
  );
};

export default LoginScreen;
