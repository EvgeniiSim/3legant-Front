import {
   createBrowserRouter,
   RouterProvider,
   Route,
   createRoutesFromElements,
} from "react-router-dom";
import UI from "./pages/UI/UI";
import { lazy } from "react";
import Root from "./components/Root/Root";
import Account from "./pages/Profile/modules/Account";
import Address from "./pages/Profile/modules/Address";
import Orders from "./pages/Profile/modules/Orders";
import Whishlist from "./pages/Profile/modules/Whishlist";
import AuthCheck from "./utils/AuthCheck";
import NotAuth from "./pages/Auth/NotAuth";
import PrefetchUser from "./store/user/PrefetchUser";

const Home = lazy(() => import("./pages/Home/Home"));

const AuthPages = lazy(() => import("./pages/Auth/Auth"));
const Reg = lazy(() => import("./pages/Auth/modules/Reg"));
const MainLayout = lazy(() => import("./components/MainLayout/MainLayout"));
const LogIn = lazy(() => import("./pages/Auth/modules/LogIn"));
const Confirm = lazy(() => import("./pages/Auth/modules/Confirm"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route element={<Root />}>
         <Route path="/" element={<MainLayout />}>
            <Route element={<PrefetchUser />}>
               <Route index element={<Home />} />

               <Route element={<AuthCheck />}>
                  <Route path="account" element={<Profile />}>
                     <Route index element={<Account />} />
                     <Route path="address" element={<Address />} />
                     <Route path="orders" element={<Orders />} />
                     <Route path="wishlist" element={<Whishlist />} />
                  </Route>
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

         <Route path="not-auth" element={<NotAuth />} />
      </Route>
   )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
