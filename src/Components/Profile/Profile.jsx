import "./Profile.css";


const Profile = (props) => {
  const { user, setProEdit, setPassEdit } = props;
  return (
    <div className="pro-main">
      <div className="pro-sub-main">

        <h1>Hesap Bilgilerim</h1>
        <h2>İsim : {user.name}</h2>
        <h2>Soy İsim : {user.surname}</h2>
        <h2>E-mail : {user.email}</h2>
        <h2>Kullanıcı Adı : {user.username}</h2>
        <div>
          <button onClick={() => setProEdit(true)}>Profili Güncelle</button>
          <button onClick={() => setPassEdit(true)}>Şifre Değiştir</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
