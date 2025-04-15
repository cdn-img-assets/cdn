import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Loading } from './components/Loading';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const AdminPage = React.lazy(() => import('./pages/AdminPage'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hub/:category" element={<CategoryPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Suspense>

        <footer className="bg-white border-t mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center text-gray-600">
              <p>© 2025 ImageHub. All images are free to use under the Unsplash License.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
