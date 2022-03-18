import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../util/fireBase/firebaseUtil";

import { ButtonsContainer, SignUpContainer } from "./signInStyles";

import FormInput from "../formInput/formInput";
import Button from "../button/buttonComponent";

import { useState } from "react";

const SignIn = () => {
  const defaultFromField = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFromField);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFromField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <SignUpContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign Up</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignIn;
