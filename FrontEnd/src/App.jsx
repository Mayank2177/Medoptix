import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from './Components/landing_page'
import AuthPage from './Components/AuthPage'
import HospitalDashboard from './Components/dashboard'
import ForecastPlanner from './Components/ForecastPlanner'
import StaffingPlanner from './Components/StaffingPlanner'
import SupplyInventory from './Components/SupplyInventory'
import AlertsNotifications from './Components/AlertsNotifications'
import AdvisoriesPublic from './Components/Advisory'
import GeoInsights from './Components/MapGeoInsights'
import ReportsAnalytics from './Components/ReportsAnalytics'

import PrivateRoute from './Components/Private Route'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<PrivateRoute><HospitalDashboard /></PrivateRoute>} />
        <Route path="/forecast-planner" element={<PrivateRoute><ForecastPlanner /></PrivateRoute>} />
        <Route path="/staffing-planner" element={<PrivateRoute><StaffingPlanner /></PrivateRoute>} />
        <Route path="/supply-inventory" element={<PrivateRoute><SupplyInventory /></PrivateRoute>} />
        <Route path="/alerts-notifications" element={<PrivateRoute><AlertsNotifications /></PrivateRoute>} />
        <Route path="/advisories-public" element={<PrivateRoute><AdvisoriesPublic /></PrivateRoute>} />
        <Route path="/geo-insights" element={<PrivateRoute><GeoInsights /></PrivateRoute>} />
        <Route path="/reports-analytics" element={<PrivateRoute><ReportsAnalytics /></PrivateRoute>} />
      </Routes>
    </Router>
  )
}

export default App
