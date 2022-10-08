import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
// import Footer from './pages/Shared/Footer/Footer';
// import Navigation from './pages/Shared/Navigation/Navigation';
import ProductDetails from './pages/Home/AllProducts/ProductDetails';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashBoardHome from './pages/Dashboard/DashboardHome/DashBoardHome';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className='transition duration-500 font-poppins'>
      <AuthProvider>
        <BrowserRouter>
          {/* <Navigation/> */}
          <Routes>
            <Route exact path='/' element={<Home></Home>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route index element={<DashBoardHome></DashBoardHome>}></Route>
              <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
              <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
            </Route>
            <Route path='/furnitures/:furnitureId' element={<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>} />
            <Route path='/services' element={<PrivateRoute><Services></Services></PrivateRoute>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<Register></Register>} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
