import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Adminsignin from './components/Adminsignin';
import Add from './components/Add';
import View from './components/View';
import Search from './components/Search';
import Apply from './components/Apply';
import { Socket } from 'socket.io-client';
import ChatSocket from './components/ChatSocket';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import JobsInformation from './components/JobInformation';
import VedioCall from './components/VedioCall';
import Employer from './components/Employer';
import Confirmation from './components/Confirmation';
import Joblists from './components/Joblists';
import Profile from './components/Profile';


function App() {
  return (
    <div>
       <BrowserRouter>
<Routes>
  <Route path='/l' element={<Login/>}/>
  <Route path='/p' element={<Signup/>}/>
  <Route path='/s' element={<Adminsignin/>}/>
  <Route path='/add' element={<Add/>}/>
  <Route path='/view' element={<View/>}/>
  <Route path='/se' element={<Search/>}/>
  <Route path='/Apply' element={<Apply/>}/>
  <Route path='/m' element={<ChatSocket/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/c' element={<ContactUs/>}/>
  <Route path='/a' element={<AboutUs/>}/>
  <Route path='/j' element={<JobsInformation/>}/>
  <Route path='/v' element={<VedioCall/>}/>
  <Route path='/e' element={<Employer/>}/>
  <Route path='/confirmation' element={<Confirmation/>}/>
  <Route path='/joblist' element={<Joblists/>}/>
  <Route path='/prof' element={<Profile/>}/>
  

</Routes>

 </BrowserRouter>
    </div>
  );
}

export default App;
