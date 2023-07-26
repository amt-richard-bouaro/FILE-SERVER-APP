import { Routes, Route, Navigate } from 'react-router-dom'

//layouts
import DefaultLayout from './layouts/DefaultLayout';
import AppLayout from './layouts/AppLayout';

//  pages
import Login from "./pages/Login";
import Register from './pages/Register';
import Dasboard from './pages/Dashboard';
import NotFound from './pages/Notfound';
import Protected from './layouts/Protected';
import Files from './pages/Files';
import NewFile from './pages/NewFile';
import Settings from './pages/Settings';
import Reset from './pages/Reset';
import ChangePassword from './pages/ChangePassword';
import Recent from './pages/Recent';

function App() {

  return <Routes>

    <Route path='/' element={<Navigate to='/account/login' />} />
    <Route path='/account' element={<DefaultLayout />} >
      <Route index element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
     
    </Route>
    
    <Route path='/app' element={<AppLayout />} >

      <Route path='admin' element={<Protected restrictedTo={['admin']} />}>
        <Route index element={<Dasboard />} />
        <Route path='home' element={<Dasboard />} />
        <Route path='files' element={<Files />} />
        <Route path='new-file' element={<NewFile />} />
        <Route path='settings' element={<Settings />} />
        
      </Route>

      <Route path='' element={<Protected restrictedTo={['user']} />}>
        <Route index element={<Files />} />
        <Route path='recent' element={<Recent />} />
        <Route path='files' element={<Files />} />
        <Route path='settings' element={<Settings />} />
        
      </Route>

      

    </Route>

    <Route path='' element={<Protected restrictedTo={['user', 'admin']} />}>

      <Route path='/change/password' element={<ChangePassword />} />

    </Route>
    <Route path='/reset/password' element={<Reset />} />
    
    <Route path='*' element={<NotFound />} />
  </Routes>

}

export default App;
