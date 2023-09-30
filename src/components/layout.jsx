import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  align-items: center;
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding: 10px;
  gap: 20px;
  border-bottom: 1.5px solid black;
  a {
    text-decoration-line: none;
  }
`;
const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: black;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;
const Button = styled.div`
  text-decoration: none;
  color: black;
  border-color: tomato;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Menu>
        <Link to="/">
          <MenuItem>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
          </MenuItem>
        </Link>
        <Link to="/login">
          <MenuItem>
            <Button className="log-in">Login</Button>
          </MenuItem>
        </Link>
        <Link to="/sign-in">
          <MenuItem>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
            </svg>
          </MenuItem>
        </Link>
        <Link to="/courses">
          <MenuItem>강의</MenuItem>
        </Link>
      </Menu>
      <Outlet />
    </Wrapper>
  );
}
