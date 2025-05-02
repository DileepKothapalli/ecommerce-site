import "./App.css";
import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import PageNotFound from "./components/shared/PageNotFound";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          {/* <AdminRoutes /> */}
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
