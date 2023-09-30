import { Navigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export default function ProtectedRoute({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
