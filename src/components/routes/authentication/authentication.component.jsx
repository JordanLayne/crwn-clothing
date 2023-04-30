import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../sign-up-form/sign-up-form.components";
import SignInForm from "../../sign-in-form/sign-in-form.components";
import './authentication.styles.scss'
const Authentication  = () => {

  return (
    <div className="authentication-container">
      
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;
