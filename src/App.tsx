import {
   createBrowserRouter,
   RouterProvider,
   Route,
   createRoutesFromElements,
} from "react-router-dom";
import UI from "./pages/UI/UI";
import Layout from "./components/Layout/Layout";
import { lazy } from "react";
import AuthRequired from "./components/AuthRequired";

const Home = lazy(() => import("./pages/Home/Home"));
const AuthPages = lazy(() => import("./pages/Auth/Auth"));
const Reg = lazy(() => import("./pages/Auth/modules/Reg"));
const LogIn = lazy(() => import("./pages/Auth/modules/LogIn"));
const Confirm = lazy(() => import("./pages/Auth/modules/Confirm"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         <Route element={<AuthRequired />}>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
            </Route>
         </Route>
         <Route path="auth" element={<AuthPages />}>
            <Route path="signUp" element={<Reg />} />
            <Route path="signIn" element={<LogIn />} />
            <Route path="confirm/:token" element={<Confirm />} />
         </Route>
         <Route path="ui" element={<UI />} />
         <Route path="*" element={<NotFound />} />
      </Route>
   )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
