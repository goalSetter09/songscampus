import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 30px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 42px;
`;
export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 420px;
`;
export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: 1.5px solid black;
  width: 420px;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    background-color: #1d9bf0;
  }
`;
export const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export const Switcher = styled.div`
  margin-top: 20px;
  a {
    color: #1d9bf0;
  }
`;
