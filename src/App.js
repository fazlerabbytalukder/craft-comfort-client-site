import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Footer from './pages/Shared/Footer/Footer';
import Navigation from './pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className='transition duration-500 font-poppins'>
      <AuthProvider>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route exact path='/' element={<Home></Home>}>

            </Route>
            <Route path='/home' element={<Home></Home>}>

            </Route>
            <Route path='/services' element={<PrivateRoute><Services></Services></PrivateRoute>}>

            </Route>
            <Route path='/login' element={<Login></Login>}>

            </Route>
            <Route path='/register' element={<Register></Register>}>

            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
