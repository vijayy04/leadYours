import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./routes/Main";
import HomeCampaign from "./routes/HomeCampaign";
import SupportRequest from "./routes/SupportRequest";
import LinkedIn from "./routes/LinkedIn";
import Login from "./routes/Login";
import ResetPassword from "./routes/ResetPassword";
import NewPassword from "./routes/NewPassword";
import SignUp from "./routes/SignUp";
import Setting from './routes/Setting';
import Campaign from "./routes/Campaign";
import CreateCampaign from "./routes/CreateCampaign";
import CreateCampaignPt2 from "./routes/CreateCampaignPt2";
import UserSetting from "./routes/UserSetting";
import EditWorkspace from "./routes/EditWorkspace";
import CreateWorkspace from "./routes/CreateWorkspace";
import Notification from "./routes/Notification";
import Inbox from "./routes/Inbox";
import Admin from "./routes/Admin";
import AdminHome from "./routes/AdminHome";
import AdminUserList from "./routes/AdminUserList";
import AdminUserDetail from "./routes/AdminUserDetail";
import AdminSetting from "./routes/AdminSetting";
import ProtectedRoutesForUser from './components/ProtectedRoutesForUser'
import ProtectedRoutesForAdmin from "./components/ProtectedRoutesForAdmin";
import Privacy from "./routes/Privacy"
import { useEffect } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './routes/Firebase'
import React, { useState } from "react";
import './components/loader.css'

function App() {

  const [redirect, setRedirect] = useState(null);

  const GetUserDetails = () => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    signInWithEmailAndPassword(auth, userDetails?.mail, userDetails?.pass)
      .then((userCredential) => {
        setRedirect("/home-campaign")
      })
      .catch((error) => {
        setRedirect("/login")
      });
  }

  useEffect(() => {
    GetUserDetails();
  }, [])

  return (
    <>
      {redirect === null ?
        (<div className="w-[100%] h-[100vh] flex justify-center  items-center loaderMain">
          <div className="w-[100%]">
            <div className="w-[100%] flex justify-center float-left">
              <div className="loader w-[100%] float-left flex"></div>
            </div>
            <div className="loading mt-[1%] w-[100%] flex justify-center float-left text-medium text-[1.3vw]">Loading...</div>
          </div>
        </div>) : (
          <BrowserRouter>
            <div>
              <div className="App">

                <Routes>

                  <Route path="/" element={<Navigate replace to={redirect} />} />

                  <Route
                    path="/main"
                    element={<Main></Main>}
                  />
                  <Route
                    path="/home-campaign"
                    element={<ProtectedRoutesForUser For='user' Component={HomeCampaign} />}
                  />
                  <Route
                    path="/support-request"
                    element={<ProtectedRoutesForUser For='user' Component={SupportRequest} />}
                  />
                  <Route
                    path="/campaign"
                    element={<ProtectedRoutesForUser For='user' Component={Campaign} />}
                  />
                  <Route
                    path="/create-campaign"
                    element={<ProtectedRoutesForUser For='user' Component={CreateCampaign} />}
                  />
                  <Route
                    path="/create-campaign-2"
                    element={<ProtectedRoutesForUser For='user' Component={CreateCampaignPt2} />}
                  />
                  <Route
                    path="/inbox"
                    element={<ProtectedRoutesForUser For='user' Component={Inbox} />}
                  />
                  <Route
                    path="/notification"
                    element={<ProtectedRoutesForUser For='user' Component={Notification} />}
                  />

                  <Route
                    path="/linkedIn"
                    element={<ProtectedRoutesForUser For='user' Component={LinkedIn} />}
                  />
                  <Route
                    path="/setting"
                    element={<ProtectedRoutesForUser For='user' Component={Setting} />}
                  />
                  <Route
                    path="/user-setting"
                    element={<ProtectedRoutesForUser For='user' Component={UserSetting} />}
                  />
                  <Route
                    path="/edit-workspace"
                    element={<ProtectedRoutesForUser For='user' Component={EditWorkspace} />}
                  />
                  <Route
                    path="/create-workspace"
                    element={<ProtectedRoutesForUser For='user' Component={CreateWorkspace} />}
                  />
                  <Route
                    path="admin"
                    element={<ProtectedRoutesForAdmin For='admin' Component={Admin} />} >

                    <Route
                      path=""
                      element={<ProtectedRoutesForAdmin For='admin' Component={AdminHome} />}
                    />
                    <Route
                      path="user-list"
                      element={<ProtectedRoutesForAdmin For='admin' Component={AdminUserList} />}
                    />
                    <Route
                      path="user-detail"
                      element={<ProtectedRoutesForAdmin For='admin' Component={AdminUserDetail} />}
                    />
                    <Route
                      path="setting"
                      element={<ProtectedRoutesForAdmin For='admin' Component={AdminSetting} />}
                    />

                  </Route>

                  <Route
                    path="/login"
                    element={<Login></Login>}
                  />
                  <Route
                    path="/privacy-policy"
                    element={<Privacy></Privacy>}
                  />

                  <Route
                    path="/reset-password"
                    element={<ResetPassword></ResetPassword>}
                  />

                  <Route
                    path="/new-password"
                    element={<NewPassword></NewPassword>}
                  />

                  <Route
                    path="/sign-up"
                    element={<SignUp></SignUp>}
                  />

                </Routes>
              </div>
            </div>
          </BrowserRouter>
        )
      }
    </>
  );
}

export default App;
