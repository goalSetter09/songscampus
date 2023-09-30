import { useNavigate } from "react-router-dom";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (e) => {};

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   if (isLoading || email === "" || password === "") {
  //     return;
  //   }
  //   try {
  //     setLoading(true);
  //     const user = await signInWithEmailAndPassword(auth, email, password);
  //     navigate("/");
  //   } catch (e) {
  //     if (e instanceof FirebaseError) {
  //       setError(e.message);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  //   console.log(email, password);
  // };
  return (
    <Wrapper>
      <Title>쏭즈캠퍼스</Title>
      <Form onSubmit={onSubmit}>
        <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
        <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required />
        <Input type="submit" value={isLoading ? "Loading..." : "Log in"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        계정이 없으신가요? <Link to="/sign-in">회원 가입</Link>
      </Switcher>
      {/* <GitHubButton /> */}
    </Wrapper>
  );
}
