import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import {
  Landing,
  Home,
  BrowseJobs,
  ProSubscription,
  ActiveProjects,
  Freelancers,
  Leaderboard,
  Disputes,
  HowItWorks
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="jobs" element={<BrowseJobs />} />
          <Route path="subscription" element={<ProSubscription />} />
          <Route path="projects" element={<ActiveProjects />} />
          <Route path="freelancers" element={<Freelancers />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="disputes" element={<Disputes />} />
          <Route path="how-it-works" element={<HowItWorks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

