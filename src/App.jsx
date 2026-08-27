
import { Routes, Route } from 'react-router-dom';

// Public pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundage from './pages/NotFoundage';

// Protected route
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

// Dashboard layout
import DashboardLayout from './layouts/Dashboard';

// Dashboard pages
import MyUrls from './pages/MyUrls';
import AnalyticsOverview from './pages/AnalyticsOverview';
import LinksPage from './pages/LinksPage';
// import Billing from './pages/Billing';
// import QrCode from './pages/QrCode';
// import Setting from './pages/Setting';


function App() {

  return (
    <Routes>

      {/* Public pages */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>

      {/* Protected pages */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<MyUrls />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/analytics" element={<AnalyticsOverview />} />
        </Route>
      </Route>

      {/* Anyone can see */}
      <Route path="*" element={<NotFoundage />} />

    </Routes>
  );
}

export default App;