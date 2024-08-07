import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">به حساب خود وارد شوید</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
