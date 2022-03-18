import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/fireBase/firebaseUtil";

import SignUp from "../../components/signUp/signUp";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
