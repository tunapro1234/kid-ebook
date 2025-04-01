import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const BookPreview = ({ bookData }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations;

  // If no book data, redirect to create page
  useEffect(() => {
    if (!bookData) {
      navigate('/create');
    }
  }, [bookData, navigate]);

  if (!bookData) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{bookData.title}</h1>
      
      {/* Book Preview */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
        <div className="flex flex-col items-center">
          {/* Cover */}
          <motion.div 
            className="mb-8 w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[3/4] bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400">{t.bookPreview.cover[language]} {bookData.title}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Book Pages */}
          <div className="w-full space-y-8">
            {bookData.pages.map((page, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden flex-shrink-0">
                  {page.blurred ? (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 backdrop-blur-xl"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">{t.bookPreview.illustration[language]} {index + 1}</span>
                    </div>
                  )}
                </div>
                <div className="w-full md:w-2/3">
                  {page.blurred ? (
                    <div className="relative">
                      <p className="text-gray-700 line-clamp-3 blur-sm select-none">
                        {Array(5).fill().map((_, i) => (
                          <span key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna eu nunc. </span>
                        ))}
                      </p>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          {t.bookPreview.blockedContent[language]}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700">{page.text}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Payment Prompt */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl shadow-lg p-6 md:p-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{t.bookPreview.paymentPrompt.title[language]}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.bookPreview.paymentPrompt.description[language]} {bookData.childName}. {t.bookPreview.paymentPrompt.unlock[language]}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">{t.bookPreview.digitalVersion.title[language]}</h3>
              <p className="text-gray-600 mb-4">{t.bookPreview.digitalVersion.description[language]}</p>
              <div className="text-2xl font-bold text-primary mb-4">$19.900 COP</div>
              <Link 
                to="/checkout" 
                className="block w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium text-center transition-colors"
              >
                {t.bookPreview.digitalVersion.button[language]}
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-primary relative">
              <div className="absolute -top-3 -right-3 bg-primary text-white text-xs px-3 py-1 rounded-full">{t.bookPreview.printedVersion.popular[language]}</div>
              <h3 className="text-xl font-bold mb-2">{t.bookPreview.printedVersion.title[language]}</h3>
              <p className="text-gray-600 mb-4">{t.bookPreview.printedVersion.description[language]}</p>
              <div className="text-2xl font-bold text-primary mb-4">$49.900 COP</div>
              <Link 
                to="/checkout" 
                className="block w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium text-center transition-colors"
              >
                {t.bookPreview.printedVersion.button[language]}
              </Link>
              <p className="text-xs text-gray-500 mt-2">{t.bookPreview.printedVersion.note[language]}</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/create" className="text-primary hover:text-primary-dark underline">
              {t.bookPreview.back[language]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPreview; 