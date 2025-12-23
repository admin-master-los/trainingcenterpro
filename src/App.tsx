import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/Landing';
import { RoleSelectionPage } from './pages/RoleSelection';
import { CatalogPage } from './pages/Catalog';
import { TrainerPage } from './pages/Trainer';
import { RegistrationPage } from './pages/Registration';
import { DashboardPage } from './pages/Dashboard';
import { StudentPage } from './pages/Student';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageData, setPageData] = useState<any>(null);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page);
    setPageData(data || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'role-selection' && <RoleSelectionPage onNavigate={handleNavigate} />}
      {currentPage === 'catalog' && <CatalogPage onNavigate={handleNavigate} />}
      {currentPage === 'trainer' && <TrainerPage onNavigate={handleNavigate} />}
      {currentPage === 'registration' && <RegistrationPage training={pageData?.training} onNavigate={handleNavigate} />}
      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'student' && <StudentPage />}

      <Footer />
    </div>
  );
}

export default App;
