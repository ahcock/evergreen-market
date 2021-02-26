import React, { useState } from 'react';
// import './sign-in.styles.scss';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  SignInContainer,
  TitleContainer,
  SignInButtonsContainer,
} from './sign-in.styles';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const { email, password } = userInfo;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
    try {
      auth.signInWithEmailAndPassword(email, password);
      setUserInfo({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <TitleContainer>Sign in with your email and password</TitleContainer>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <SignInButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
