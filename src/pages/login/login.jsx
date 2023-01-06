
import {Button} from "../../components/atoms/button/button"
import Title from '../../components/atoms/title/title'
import { auth } from '../../config/firebaseConfig'
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import './style.css'

function Login() { 
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => { 
    const providerGoogle = new GoogleAuthProvider(); 
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const userAvatar = result.user.photoURL
          const userName = result.user.displayName
          localStorage.setItem('user', JSON.stringify(userName));
          localStorage.setItem('userAvatar', JSON.stringify(userAvatar));
          navigate("/home");
        }  
      }).catch((error) => {
        console.log(error);        
      });
  };

  const handleSignInWithFacebook = () => { 
    const providerFacebook = new FacebookAuthProvider(); 
    signInWithPopup(auth, providerFacebook)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        if (credential) {
          const userAvatar = result.user.photoURL
          const userName = result.user.displayName
          localStorage.setItem('user', JSON.stringify(userName));
          localStorage.setItem('userAvatar', JSON.stringify(userAvatar));
          navigate("/home");
        }  
      }).catch((error) => {
        console.log(error);        
      });
  };

  const handleSignInWithGitHub = () => { 
    const providerGitHub = new GithubAuthProvider(); 
    signInWithPopup(auth, providerGitHub)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        if (credential) {
          const userAvatar = result.user.photoURL
          const userName = result.user.displayName
          localStorage.setItem('user', JSON.stringify(userName));
          localStorage.setItem('userAvatar', JSON.stringify(userAvatar));
          navigate("/home");
        }  
      }).catch((error) => {
        console.log(error);        
      });
  };
    
  return (
      <div className="login">
        <Title className="login__title" text={'Login'}/>
        <div className="login__actions">
          <Button className="button" text={'Google'} onClick={handleSignInWithGoogle} />
          <Button className="button" text={'Facebook'} onClick={handleSignInWithFacebook} />
          <Button className="button" text={'GitHub'} onClick={handleSignInWithGitHub} />     
        </div>
      </div>
    );
}

export default Login;