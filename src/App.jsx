import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Login from "./routes/login";
import SignIn from "./routes/sign-in";
import ProtectedRoute from "./components/protected-route";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import Footer from "./components/footer";
import Courses from "./routes/courses/courses";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Heebo', sans-serif;
    font-family: 'Noto Sans KR', sans-serif;  
  }
`;
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
        <Footer />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      // {
      //   path: "courses",
      //   element: < />,
      // },
      // {
      //   path: "",
      //   element: <Home />,
      // },
    ],
  },
]);

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
function App() {
  // const [isLoading, setLoading] = useState(false);
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
