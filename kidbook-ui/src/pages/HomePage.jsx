import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary-light/30 to-secondary-light/30 rounded-3xl">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t.homePage.hero.title[language]}<br/>
            <span className="text-primary">{t.homePage.hero.subtitle[language]}</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.homePage.hero.description[language]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/create" 
              className="bg-primary hover:bg-primary-dark text-white text-lg py-3 px-8 rounded-full transition-colors duration-300 inline-block shadow-lg"
            >
              {t.homePage.hero.cta[language]}
            </Link>
          </motion.div>
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img 
              src="/demo-book.png" 
              alt="Ejemplo de libro personalizado" 
              className="mx-auto max-w-full md:max-w-2xl rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.homePage.howItWorks.title[language]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-primary-light/30 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">{t.homePage.howItWorks.step1.title[language]}</h3>
              <p className="text-gray-600">{t.homePage.howItWorks.step1.description[language]}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-primary-light/30 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">{t.homePage.howItWorks.step2.title[language]}</h3>
              <p className="text-gray-600">{t.homePage.howItWorks.step2.description[language]}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-primary-light/30 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">{t.homePage.howItWorks.step3.title[language]}</h3>
              <p className="text-gray-600">{t.homePage.howItWorks.step3.description[language]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Themes Section */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.homePage.themes.title[language]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-accent-light"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{t.homePage.themes.moral.title[language]}</h3>
                <p className="text-gray-600">{t.homePage.themes.moral.description[language]}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-secondary-light"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{t.homePage.themes.social.title[language]}</h3>
                <p className="text-gray-600">{t.homePage.themes.social.description[language]}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary-light"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{t.homePage.themes.knowledge.title[language]}</h3>
                <p className="text-gray-600">{t.homePage.themes.knowledge.description[language]}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-purple-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{t.homePage.themes.fantasy.title[language]}</h3>
                <p className="text-gray-600">{t.homePage.themes.fantasy.description[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.homePage.cta.title[language]}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.homePage.cta.description[language]}
          </p>
          <Link 
            to="/create" 
            className="bg-primary hover:bg-primary-dark text-white text-lg py-3 px-8 rounded-full transition-colors duration-300 inline-block shadow-lg"
          >
            {t.homePage.cta.button[language]}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 