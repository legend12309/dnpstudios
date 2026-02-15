import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { TeamPage } from './pages/TeamPage'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  )
}