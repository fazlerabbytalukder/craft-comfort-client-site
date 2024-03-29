import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashBoardHome from './pages/Dashboard/DashboardHome/DashBoardHome';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AminRoute from './pages/Login/Login/AdminRoute/AminRoute';
import ManageAll from './pages/Dashboard/ManageAll/ManageAll';
import ManageAllProduct from './pages/Dashboard/ManageAllProduct/ManageAllProduct';
import AddProducts from './pages/Dashboard/AddProducts/AddProducts';
import CartReviews from './pages/Cart/CartReview/CartReviews';
import Checkout from './pages/Cart/Checkout/Checkout';
import { DataProvider } from './contexts/DataProvider';
import { useEffect, useState } from 'react';
import Products from './pages/Home/AllProducts/Products';

function App() {
  const [hitDb, setHitDb] = useState(0);
  const quantity = () => {
    setHitDb(hitDb + 1);
  }
  
  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('visitedBefore');
    if (isFirstVisit) {
      localStorage.setItem('visitedBefore', 'true');
      setTimeout(() => {
        window.location.reload();
      }, 10);
    }
  }, []);




  return (
    <div className='transition duration-500 font-poppins'>
      <DataProvider.Provider value={{quantity}}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home hitDb={hitDb}></Home>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/products' element={<Products></Products>} />
            <Route path='/myorder' element={<PrivateRoute><MyOrder></MyOrder></PrivateRoute>}></Route>
            <Route path='/cartReview' element={<CartReviews></CartReviews>} />
            <Route path='/checkout' element={<PrivateRoute><Checkout></Checkout></PrivateRoute>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route index element={<DashBoardHome></DashBoardHome>}></Route>
              <Route path='manageall' element={<AminRoute><ManageAll></ManageAll></AminRoute>}></Route>
              <Route path='makeadmin' element={<AminRoute><MakeAdmin></MakeAdmin></AminRoute>}></Route>
              <Route path='manageallproduct' element={<AminRoute><ManageAllProduct></ManageAllProduct></AminRoute>}></Route>
              <Route path='addproducts' element={<AminRoute><AddProducts></AddProducts></AminRoute>}></Route>
            </Route>
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<Register></Register>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </DataProvider.Provider>
    </div>
  );
}

export default App;
