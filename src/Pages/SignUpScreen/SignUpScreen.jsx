import React from "react";
import { useState } from "react";
import RegisterManager from "../../Utility/SignUpManager";
import "./SignUpScreen.css";
import Particles from "../../Particles";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);

  const RegisterHandler = () => {
    setSuccess(RegisterManager(name, surname, email, username, password));
  };

  return success === false ? (
    <div className="main">
    <Particles/>
    <div className="sub-main">
      <div>
        <div>
          <h1>Hesap Oluştur</h1></div>

        <div className="input-icons" >
        <i class="fa fa-user icon">
              </i>
            <input 
            type="text" 
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder=" İsim" 
            className="name"/>
          </div>

          <div className="input-icons" >
          <i class="fa fa-user icon">
              </i>
            <input 
            type="text" 
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            placeholder=" Soy İsim" 
            className="name"/>
          </div>

          <div className="input-icons">
          <i class="fa fa-envelope icon">
              </i>
            <input 
            type="text" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="E-posta" 
            className="name"/>
          </div>

          <div className="input-icons">
          <i class="fa fa-user icon">
              </i>
            <input 
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Kullanıcı Adı" 
            className="name"/>
          </div>

          <div className="input-icons">
          <i class="fa fa-key icon">
              </i>
            <input 
            type="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Şifre" 
            className="name"/>
          </div>

          <button className="login-button" onClick={RegisterHandler}>
            Kayıt Ol
          </button>
          <button className="login-button" onClick={props.clickOnGeri}>
            Geri
          </button>
        </div>
      </div>
    </div>
    
    
  ) : (
    <div className="main">
      <div className="reg-inr success">
        <h1>Kaydınız Başarıyla Tamamlanmıştır.</h1>
        <button className="btn-register btn-upd" onClick={props.clickOnGeri}>
          Geri Dön
        </button>
      
      </div>
    
    </div>

  );
};

export default RegisterScreen;
