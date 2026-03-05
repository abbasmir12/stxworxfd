import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from './Sidebar';
import Footer from '../Footer';
import Cursor from '../Cursor';

function Layout() {
  return (
    <>
      <style>{`
        .main > section,
        .main > div:not(.sidebar) {
          margin-left: 40px;
        }
        @media (max-width: 1199px) {
          .main > section,
          .main > div:not(.sidebar) {
            margin-left: 0;
          }
        }
      `}</style>
      <Cursor />
      <Header />
      <div className="wrapper">
        <main className="main">
          <Sidebar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
