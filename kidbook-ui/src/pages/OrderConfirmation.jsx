import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const OrderConfirmation = () => {
  const { language } = useLanguage();
  const t = translations;

  // Generate a random order number for the demo
  const orderNumber = `CM-${Math.floor(10000 + Math.random() * 90000)}`;
  
  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div 
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t.orderConfirmation.thankYou[language]}</h1>
        
        <p className="text-lg text-gray-600 mb-6">
          {t.orderConfirmation.orderProcessed[language]}
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <p className="text-gray-600 mb-2">{t.orderConfirmation.orderNumber[language]}</p>
          <p className="text-xl font-bold text-gray-800">{orderNumber}</p>
        </div>
        
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-bold">{t.orderConfirmation.nextSteps.title[language]}</h2>
          
          <div className="bg-blue-50 rounded-lg p-4 text-left">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">{t.orderConfirmation.nextSteps.emailConfirmation.title[language]}</h3>
                <p className="text-sm">{t.orderConfirmation.nextSteps.emailConfirmation.description[language]}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 text-left">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">{t.orderConfirmation.nextSteps.download.title[language]}</h3>
                <p className="text-sm">{t.orderConfirmation.nextSteps.download.description[language]}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 text-left">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">{t.orderConfirmation.nextSteps.shipping.title[language]}</h3>
                <p className="text-sm">{t.orderConfirmation.nextSteps.shipping.description[language]}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-lg font-medium transition-colors">
            {t.orderConfirmation.nextSteps.downloadButton[language]}
          </button>
          
          <div className="pt-4">
            <Link to="/" className="text-primary hover:text-primary-dark">
              {t.orderConfirmation.nextSteps.backToHome[language]}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation; 