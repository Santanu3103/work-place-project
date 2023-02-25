import React,{useContext} from "react";
import { auth,db } from "../../../firebase";
import "./AuthenticationPage.css";
import {Grid} from "@mui/material";
import NavBar from '../NavBar'
import googlebtn from '../../../imgs/google-btn.png'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {userContext} from '../../../context/userContext'
import { getDoc, doc } from "firebase/firestore";
import { Notification } from "../../../utils/Notification";

function AuthenticationPage({ type }) {
  const [state,dispatch]=useContext(userContext)
const navigate=useNavigate()

const signIn = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth,provider)
  .then(async(result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    dispatch({type:'LOGIN',payload:user})
    // make a fetch call to firsebase uid and check if user exist or not
    // if user exist user put data in context and redirect to profile page

    let firsebaseUser=await getDoc(doc(db, "userInfo", user.uid));
    if(firsebaseUser.exists()){
      dispatch({type:'SET_USER_INFO',payload:firsebaseUser.data()})
    }
    else{
      firsebaseUser=null
    }

    if(type==='candidate'){
      //user exist
      //?user exist as candidate 
      //!user exist as employer
      if(firsebaseUser){
        if(firsebaseUser.data().type==='candidate'){
          //user exist as candidate
          //redirect to candidate profile page
          navigate('/candidate/profile')
        }
        else{
          //user exist as employer
          //show him error message
          Notification({
            message:'you are trying to signIn as candidate but you are already exist as employer',
            type:'error'
          })
        }
      }
      else{
        //user not exist--> redirect to candidate onboarding page
        navigate('/candidate/onboarding')
      }
  
    
    }

    else{
      //user exist
      //?user exist as employer 
      //!user exist as candidate
      if(firsebaseUser){
        if(firsebaseUser.data().type==='employer'){
          //user exist as employer
          //redirect to employer profile page
          navigate('/employer/profile')
        }
        else{
          //user exist as candidate
          //show him error message
          Notification({
            message:'you are trying to signIn as employer but you are already exist as candidate',
            type:'error'
          })
        }
      }
      else{
        //user not exist--> redirect to employer onboarding page
        navigate('/employer/onboarding')
      }
    }
    console.log(result,'result');
  })
  .catch((error) => {})

}

  return (
  
    <Grid container>
    <Grid className="auth-btn-container" item xs={12}>
    <NavBar/>
    </Grid>
    <Grid className="auth-btn-container" item  xs={8}>
      <h1>Welcome {type}</h1>
      <h3>please Sign IN</h3>
      <div onClick={signIn} className="auth-btn">
        <img src={googlebtn} alt="googlebtn" />
      </div>
    </Grid>
    <Grid item  xs={4}>
    </Grid>
  </Grid>
  );
}

export default AuthenticationPage;

// if user is candidate and exist redirect to candidate profile page
// if user is candidate and not exist redirect to candidate onboarding page
// if user is employer and exist redirect to employer profile page
// if user is employer and not exist redirect to employer onboarding page


//if user is candidate and exist and he is tring to signIn as employer show him error message
//if user is employer and exist and he is tring to signIn as candidate show him error message