import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />

      <main className="mt-0 flex-grow md:mt-3">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
export default MainLayout;
