import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import './Google.css'


export default class Google extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false,
            email:'',
            name:'',
            picture:''
        }
    }
     responseGoogle=(response)=>{
        console.log(response);
        this.setState({
            isLoggedIn:true,
            email:response.profileObj.email,
            picture:response.profileObj.imageUrl,
            name:response.profileObj.name

        })
    }
    render() {
            let googleContent;

            if(this.state.isLoggedIn){
                googleContent=(
                    <div className="gogContent">
                        <img  className="profile-image" src={this.state.picture} alt={this.state.name}/>
                        <h3>Welcome {this.state.name}</h3>
                        <p>Your email : {this.state.email}</p>
                    </div>
                )
            }
            else{
                googleContent=( <GoogleLogin
                   
                    clientId={"424577951335-qsch7u9ts4uss6f62k8fbe2n78d51trn.apps.googleusercontent.com"}
                    buttonText="LOGIN WITH GOOGLE"
                    fields='name,email,picture'
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    />
                    )
            }
        
        return (
            <div className="google">
               {googleContent}
             </div>
        )
    }
}
