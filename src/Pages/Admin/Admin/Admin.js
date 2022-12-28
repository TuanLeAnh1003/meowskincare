import React from 'react';
import './Admin.css';
import {Routes, Route, Navigate} from 'react-router-dom';

import Statistic from '../Statistic/Statistic';
import SettingOptions from '../SettingOptions/SettingOptions';
import AdminProfile from '../AdminProfile/AdminProfile';
import OrderManagement from '../OrderManagement/OrderManagement';
import ResponseManagement from '../ResponseManagement/ResponseManagement';
import AdminHeader from './../../../Components/Header/AdminHeader';
import AdminFooter from './../../../Components/Footer/AdminFooter';
import UserManagement from '../UserManagement';
import UserCreate from '../UserManagement/UserCreate';
import UserUpdate from '../UserManagement/UserUpdate';
import OrderView from '../OrderView';
import NewsManagement from '../NewsManagement';
import NewsCreate from '../NewsManagement/NewsCreate';
import NewsUpdate from '../NewsManagement/NewsUpdate';
import CustomerManagement from '../CustomerManagement/CustomerManagement';
import ProductManagement from '../ProductManagement/ProductManagement';
import ProductCreate from '../ProductManagement/ProductCreate';
import ProductUpdate from '../ProductManagement/ProductUpdate';

function Admin() {
  return (
    <div className='admin'>
      <AdminHeader />
      <div className='admin__cols'>
        <div className='admin__col'>
          <div>
            <Routes>
              <Route path='/' element={<AdminProfile />} />
              <Route path="/*" element={<Navigate to="/admin" />} />
              <Route path='statistic' element={<Statistic />} />
              <Route path='settings' element={<SettingOptions />} />
              <Route path='admin-profile' element={<AdminProfile />} />
              <Route path='order-management' element={<OrderManagement />} />
              <Route path='user-management' element={<UserManagement />} />
              <Route path='customer-management' element={<CustomerManagement />} />
              <Route path='product-management' element={<ProductManagement />} />
              <Route path='product-management/product-create' element={<ProductCreate />} />
              <Route path='product-management/product-update/:productId' element={<ProductUpdate />} />
              <Route path='user-create' element={<UserCreate />} />
              <Route path='user-update' element={<UserUpdate />} />
              <Route
                path='response-management'
                element={<ResponseManagement />}
              />
              <Route path='order-view' element={<OrderView />} />
              <Route path='news-management' element={<NewsManagement />} />
              <Route path='news-create' element={<NewsCreate />} />
              <Route path='news-update/:newsId' element={<NewsUpdate />} />
            </Routes>
          </div>

          <AdminFooter />
        </div>
      </div>
    </div>
  );
}

export default Admin