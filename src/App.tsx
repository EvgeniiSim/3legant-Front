import {
   createBrowserRouter,
   RouterProvider,
   Route,
   createRoutesFromElements,
} from "react-router-dom";
import UI from "./pages/UI/UI";
import { lazy } from "react";
import Root from "./components/Root/Root";

const Home = lazy(() => import("./pages/Home/Home"));

const AuthPages = lazy(() => import("./pages/Auth/Auth"));
const Reg = lazy(() => import("./pages/Auth/modules/Reg"));
const MainLayout = lazy(() => import("./components/MainLayout/MainLayout"));
const LogIn = lazy(() => import("./pages/Auth/modules/LogIn"));
const Confirm = lazy(() => import("./pages/Auth/modules/Confirm"));

const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const Profile = lazy(() => import("./pages/Profile/Profile"));
const Account = lazy(() => import("./pages/Profile/modules/Account"));
const Address = lazy(() => import("./pages/Profile/modules/Address"));
const Orders = lazy(() => import("./pages/Profile/modules/Orders"));
const Whishlist = lazy(() => import("./pages/Profile/modules/Whishlist"));

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route element={<Root />}>
         <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />}>
               <Route path="account" element={<Account />} />
               <Route path="address" element={<Address />} />
               <Route path="orders" element={<Orders />} />
               <Route path="whishlist" element={<Whishlist />} />
            </Route>

            <Route path="ui" element={<UI />} />
            <Route path="*" element={<NotFound />} />
         </Route>
         <Route path="auth" element={<AuthPages />}>
            <Route index path="signUp" element={<Reg />} />
            <Route path="signIn" element={<LogIn />} />
            <Route path="confirm/:token" element={<Confirm />} />
         </Route>
      </Route>
   )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
