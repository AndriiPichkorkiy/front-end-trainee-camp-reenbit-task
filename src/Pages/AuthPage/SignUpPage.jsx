import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../Api/apiAuth";
import { NotificationManager } from 'react-notifications';
import { Form, TitelInput, FormFooter, FormFooterLink, StyledButton, ContainerCenter } from "./Sign.styled";
import BackButton from "../../Components/BackButton/BackButton";

const defaultState = {
  name: "",
  email: "",
  password: "",
};

const SignUpPage = () => {
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
    // setFormData({ ...formData });

    if (Object.values(formData).every((item) => !!item)) {
      try {
        await apiAuth.signUp(formData)
        NotificationManager.success("Now you can sing-in", "Success", 2000);
      } catch (error) {

      }

    } else {
      NotificationManager.warning("Fill in all filds pls", "Error", 2000);
    }
  }

  return (
    <ContainerCenter>
      <BackButton />
      <Form>
        <div>
          <TitelInput>Name:</TitelInput>
          <input
            type="text"
            name="name"
            onChange={handlerOnChange}
            value={formData.name}
          />
        </div>
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
            Registration
          </StyledButton>
        </div>
      </Form>
      <FormFooter>
        <p>allready have an accaunt? </p>
        <FormFooterLink
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          Go to login screen
        </FormFooterLink>
      </FormFooter>
    </ContainerCenter>
  );
}

export default SignUpPage;