import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { AboutPage } from '@/pages/about'
import { JourneyPage } from '@/pages/journey'
import { FeaturedWorkPage } from '@/pages/featured-work'
import { WhatICanDoPage } from '@/pages/what-i-can-do'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="journey" element={<JourneyPage />} />
          <Route path="featured-work" element={<FeaturedWorkPage />} />
          <Route path="what-i-can-do" element={<WhatICanDoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
