import { Routes, Route } from 'react-router-dom';
import Dashboard from "../components/pages/admin/Dashboard"
import ProductsList from "../components/pages/admin/ProductsList"
import ProductCreate from "../components/pages/admin/ProductCreate"
import AdminHome from '../components/pages/admin/AdminHome';
import AdminLayout from '../components/layout/AdminLayout';
import PageNotFound from '../components/shared/PageNotFound';

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="products/create" element={<ProductCreate />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    </Routes>
  );
};

export default AdminRoutes;
