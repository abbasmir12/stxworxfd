import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './context/WalletContext';
import { useWallet } from './context/WalletContext';
import RoleSelectionModal from './components/RoleSelectionModal';
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
  HowItWorks,
  PostJob
} from './pages';

function AppContent() {
  const { showRoleModal, selectRole } = useWallet();

  return (
    <>
      {showRoleModal && <RoleSelectionModal onSelectRole={selectRole} />}
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="jobs" element={<BrowseJobs />} />
            <Route path="post-job" element={<PostJob />} />
            <Route path="subscription" element={<ProSubscription />} />
            <Route path="projects" element={<ActiveProjects />} />
            <Route path="freelancers" element={<Freelancers />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="disputes" element={<Disputes />} />
            <Route path="how-it-works" element={<HowItWorks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <WalletProvider>
      <AppContent />
    </WalletProvider>
  );
}

export default App;

