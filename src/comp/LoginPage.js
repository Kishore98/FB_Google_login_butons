import React, { Component } from 'react';
import '../App.css';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class LoginPage extends Component {

  render() {
    let fbContent;
    let googleContent;

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }
    fbContent=(<FacebookLogin 
      appId="308785190221234" 
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      />)

      googleContent=( <GoogleLogin
                   
        clientId={"424577951335-qsch7u9ts4uss6f62k8fbe2n78d51trn.apps.googleusercontent.com"}
        buttonText="LOGIN WITH GOOGLE"
        fields='name,email,picture'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />
        )
    return (
      <div >
        <h2 className='title'>Welcome to MyApp</h2>
        <h3 className="text">LOGIN WITH FACEBOOK OR GOOGLE</h3>
       <div className="buttons">
       <div className="fb">{fbContent}</div> 
        <div className='google'>{googleContent}</div>
        </div>
      
      </div>
    );
  }
}

export default LoginPage;