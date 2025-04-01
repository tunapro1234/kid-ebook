import { Outlet, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

const Layout = () => {
  const { language } = useLanguage();
  const t = translations;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-primary-dark">
            Cuentos Mágicos
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              {t.header.home[language]}
            </Link>
            <Link to="/create" className="text-gray-600 hover:text-primary transition-colors">
              {t.header.createBook[language]}
            </Link>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              {t.header.howItWorks[language]}
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/create" className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-full transition-colors duration-300">
              {t.header.createNow[language]}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cuentos Mágicos</h3>
              <p className="text-gray-300">
                {t.footer.tagline[language]}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t.footer.links[language]}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    {t.header.home[language]}
                  </Link>
                </li>
                <li>
                  <Link to="/create" className="text-gray-300 hover:text-white transition-colors">
                    {t.header.createBook[language]}
                  </Link>
                </li>
                <li>
                  <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                    {t.footer.faq[language]}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t.footer.contact[language]}</h3>
              <p className="text-gray-300">
                contacto@cuentosmagicos.co<br />
                Bogotá, Colombia
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Cuentos Mágicos. {t.footer.rights[language]}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 