
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import UsersPage from './pages/usersPage';
import UpdatePage from './pages/updatePage';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
          <Toaster position="top-center" reverseOrder={false} />
   <Router>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/edituser' element={<UpdatePage/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
