import { Routes, Route } from 'react-router-dom';
import Dashboard from "../components/admin/Dashboard"
import AdminHome from '../components/admin/AdminHome';
import AdminLayout from '../components/layout/AdminLayout';
import PageNotFound from '../components/shared/PageNotFound';
import ProductManagement from '../components/ProductManagement/ProductManagement';

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product-management" element={<ProductManagement />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    </Routes>
  );
};

export default AdminRoutes;
