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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<HospitalDashboard />} />
        <Route path="/forecast-planner" element={<ForecastPlanner />} />
        <Route path="/staffing-planner" element={<StaffingPlanner />} />
        <Route path="/supply-inventory" element={<SupplyInventory />} />
        <Route path="/alerts-notifications" element={<AlertsNotifications />} />
        <Route path="/advisories-public" element={<AdvisoriesPublic />} />
        <Route path="/geo-insights" element={<GeoInsights />} />
        <Route path="/reports-analytics" element={<ReportsAnalytics />} />
      </Routes>
    </Router>
  )
}

export default App
