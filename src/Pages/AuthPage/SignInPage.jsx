import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth, { signInWithGoogle } from "../../Api/apiAuth";
import { NotificationManager } from 'react-notifications';
import { Form, TitelInput, FormFooter, FormFooterLink, ServicesEnterContainer, ContainerCenter, StyledButton } from "./Sign.styled";
// import { button } from "../Components/Button/button";
import { useAuth0 } from "@auth0/auth0-react";

import GoogleIcon from '@mui/icons-material/Google';
import Auth0Icon from '../../assest/icon-auth0-logo-dark.svg';
import BackButton from "../../Components/BackButton/BackButton";

const defaultState = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const [formData, setFormData] = useState(defaultState);
  const navigate = useNavigate();

  function handlerOnChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function submit(e) {
    e.preventDefault();

    for (const key in formData) {
      formData[key] = formData[key].trim();
    }

    if (Object.values(formData).every((item) => !!item)) {
      try {
        await apiAuth.signIn(formData)
        NotificationManager.success("", "Success", 2000);
        navigate("/");
      } catch (error) {
        NotificationManager.warning(error.message, "Error", 2000);
      }
    } else {
      NotificationManager.warning("Fill in all filds pls", "Error", 2000);
    }
  }

  const submitSignInWithGoogle = () => {
    signInWithGoogle().then(response => {
      NotificationManager.success("", "Success", 2000);
      navigate("/");
    })
  }

  // auth0
  const { loginWithRedirect } = useAuth0();

  const iconSizeGoogle = 42;
  const iconSizeAuth0 = 21;

  return (
    <ContainerCenter>
      <BackButton />
      <Form>
        <div>
          <TitelInput>Email:</TitelInput>
          <input
            type="text"
            name="email"
            onChange={handlerOnChange}
            value={formData.email}
          />
        </div>
        <div>
          <TitelInput>Password:</TitelInput>
          <input
            type="password"
            name="password"
            onChange={handlerOnChange}
            value={formData.password}
          />
        </div>
        <div>
          <StyledButton coloredBtn type="submit" onClick={submit}>
            Enter
          </StyledButton>

        </div>
      </Form>
      <ServicesEnterContainer>
        <StyledButton Service type="submit" onClick={submitSignInWithGoogle}>
          <GoogleIcon size={iconSizeGoogle} /> Google
        </StyledButton>
        <StyledButton Service onClick={() => loginWithRedirect()}>
          <img style={{ width: iconSizeAuth0 }} src={Auth0Icon} alt="" />
          Auth0
        </StyledButton>
      </ServicesEnterContainer>


      <FormFooter>
        <p>don't have an accaunt? </p>
        <FormFooterLink
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          Go to registration screen
        </FormFooterLink>
      </FormFooter>
    </ContainerCenter>
  )
}

export default SignInPage;