import AdminNavbar from '../pages/admin/AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <div style={{ padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
