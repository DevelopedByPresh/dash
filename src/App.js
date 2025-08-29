import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectPlatform from './Auth/selectPlatform';
import AuthScreen from './Auth/account';
import CreatePassword from './Auth/createPassword';
import SelectChannel from './Auth/selectChannel';
import VerifyCode from './Auth/verifyCode';
import ProfileStep1 from './Auth/profileSetup/profileSetupStep1'
import ProfileStep2 from './Auth/profileSetup/profileSetupStep2';
import ProfileStep3 from './Auth/profileSetup/profileSetupStep3';
import ProfileStep4 from './Auth/profileSetup/profileSetupStep4';
import ResetPassword from './Auth/resetPassword/resetPassword';
import VerifyPassCode from './Auth/resetPassword/verifyPassCode';
import CreateNewPassword from './Auth/resetPassword/createNewPassword';


import Dashboard from './Dashboard/Dashboard';



function App() {
  return (

<Router>
  <Routes>
    <Route path='/' element={<SelectPlatform/>}/>
    <Route path='/Authentication' element={<AuthScreen/>}/>
    <Route path='/CreatePassword' element={<CreatePassword/>}/>
    <Route path='/SelectChannel' element={<SelectChannel/>}/>
    <Route path='/VerifyCode' element={<VerifyCode/>}/>
    <Route path='/ProfileStep1' element={<ProfileStep1/>}/>
    <Route path='/ProfileStep2' element={<ProfileStep2/>}/>
    <Route path='/ProfileStep3' element={<ProfileStep3/>}/>
    <Route path='/ProfileStep4' element={<ProfileStep4/>}/>
    <Route path='/ResetPassword' element={<ResetPassword/>}/>
    <Route path='/VerifyPassCode' element={<VerifyPassCode/>}/>
    <Route path='/CreateNewPassword' element={<CreateNewPassword/>}/>





    <Route path='/Dashboard' element={<Dashboard/>}/>



  </Routes>

</Router>
  );
}

export default App;
