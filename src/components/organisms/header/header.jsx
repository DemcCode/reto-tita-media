import React from 'react';
import { Image } from '../../atoms/image/image';
import { Text } from '../../atoms/text/text';
import { Link } from '../../atoms/link/link';
import './style.css'

function Header({user}) { 

  let nameUser = localStorage.getItem('user') 
  nameUser = nameUser.replace(/"/g, '');
  let avatarUser = localStorage.getItem('userAvatar')
  avatarUser = avatarUser.replace(/"/g, '')

  function cleanLocal(){
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('userAvatar');
    window.location.reload();
  }

  return (
    <header>
      <div className="left">
        <Image className="logo" src={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"} alt={"logo"}/>
      </div>
      <div className="right">
        <Image className="imgUser" src={avatarUser} alt={"Profile"} />
        <div className="nameSign">
          <Text className="textNameUser" text={nameUser}/>
          <Link className="signOut" href={"/"} text={"Sign Out"} onClick={cleanLocal} />
        </div>        
      </div>
    </header>
  );
};

export default Header;