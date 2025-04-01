import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const Checkout = ({ bookData }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations;
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    productType: 'digital',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'card'
  });

  // If no book data, redirect to create page
  useEffect(() => {
    if (!bookData) {
      navigate('/create');
    }
  }, [bookData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      navigate('/confirmation');
    }, 2000);
  };

  if (!bookData) return null;

  // Helper function to get theme name translation
  const getThemeName = (themeId) => {
    switch(themeId) {
      case 'valores':
        return t.bookCreator.storyTheme.values.label[language];
      case 'social':
        return t.bookCreator.storyTheme.social.label[language];
      case 'conocimiento':
        return t.bookCreator.storyTheme.knowledge.label[language];
      case 'fantasia':
        return t.bookCreator.storyTheme.fantasy.label[language];
      default:
        return '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.checkout.title[language]}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">{t.checkout.summary.title[language]}</h2>
            
            <div className="mb-4">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3">
                <div className="h-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{t.bookPreview.cover[language]} {bookData.title}</span>
                </div>
              </div>
              <h3 className="font-medium">{bookData.title}</h3>
              <p className="text-sm text-gray-500">
                {t.checkout.summary.theme[language]} {getThemeName(bookData.theme)}
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>{t.checkout.summary.price[language]}</span>
                <span>{formData.productType === 'digital' ? '$19.900 COP' : '$49.900 COP'}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>{t.checkout.summary.shipping[language]}</span>
                <span>{formData.productType === 'digital' ? t.checkout.summary.free[language] : '$10.000 COP'}</span>
              </div>
              <div className="flex justify-between font-bold border-t border-gray-200 pt-2 mt-2">
                <span>{t.checkout.summary.total[language]}</span>
                <span>{formData.productType === 'digital' ? '$19.900 COP' : '$59.900 COP'}</span>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              <p className="mb-2">{t.checkout.summary.digitalNote[language]}</p>
              {formData.productType === 'printed' && (
                <p>{t.checkout.summary.printedNote[language]}</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Type Selection */}
              <div className="mb-6">
                <label className="text-lg font-bold block mb-3">{t.checkout.productType.title[language]}</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-all
                      ${formData.productType === 'digital' 
                        ? 'border-primary bg-primary/10 ring-2 ring-primary' 
                        : 'border-gray-200 hover:border-primary/50'}`}
                    onClick={() => setFormData(prev => ({ ...prev, productType: 'digital' }))}
                  >
                    <input
                      type="radio"
                      id="digital"
                      name="productType"
                      value="digital"
                      checked={formData.productType === 'digital'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="digital" className="cursor-pointer font-medium">
                      {t.checkout.productType.digital.title[language]}
                    </label>
                    <p className="text-sm text-gray-500 mt-1 ml-5">$19.900 COP</p>
                  </div>
                  
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-all
                      ${formData.productType === 'printed' 
                        ? 'border-primary bg-primary/10 ring-2 ring-primary' 
                        : 'border-gray-200 hover:border-primary/50'}`}
                    onClick={() => setFormData(prev => ({ ...prev, productType: 'printed' }))}
                  >
                    <input
                      type="radio"
                      id="printed"
                      name="productType"
                      value="printed"
                      checked={formData.productType === 'printed'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="printed" className="cursor-pointer font-medium">
                      {t.checkout.productType.printed.title[language]}
                    </label>
                    <p className="text-sm text-gray-500 mt-1 ml-5">$49.900 COP {t.checkout.productType.printed.shipping[language]}</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-lg font-bold mb-3">{t.checkout.contactInfo.title[language]}</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.checkout.contactInfo.fullName[language]}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.checkout.contactInfo.email[language]}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.checkout.contactInfo.phone[language]}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Address - Only for printed books */}
              {formData.productType === 'printed' && (
                <div>
                  <h2 className="text-lg font-bold mb-3">{t.checkout.shippingAddress.title[language]}</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.checkout.shippingAddress.address[language]}
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          {t.checkout.shippingAddress.city[language]}
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          {t.checkout.shippingAddress.state[language]}
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.checkout.shippingAddress.zip[language]}
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Payment Method */}
              <div>
                <h2 className="text-lg font-bold mb-3">{t.checkout.paymentMethod.title[language]}</h2>
                <div className="space-y-3">
                  {['card', 'mercadopago', 'pse'].map(method => (
                    <div 
                      key={method}
                      className={`border rounded-lg p-4 cursor-pointer transition-all
                        ${formData.paymentMethod === method 
                          ? 'border-primary bg-primary/10 ring-2 ring-primary' 
                          : 'border-gray-200 hover:border-primary/50'}`}
                      onClick={() => setFormData(prev => ({ ...prev, paymentMethod: method }))}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id={method}
                          name="paymentMethod"
                          value={method}
                          checked={formData.paymentMethod === method}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor={method} className="cursor-pointer">
                          {method === 'card' && t.checkout.paymentMethod.card[language]}
                          {method === 'mercadopago' && t.checkout.paymentMethod.mercadopago[language]}
                          {method === 'pse' && t.checkout.paymentMethod.pse[language]}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Placeholder for payment form fields - would be replaced with actual payment provider integration */}
                <div className="mt-4 p-4 border border-dashed border-gray-300 rounded-lg">
                  <p className="text-center text-gray-500">
                    {t.checkout.paymentMethod.placeholder[language]}
                  </p>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white text-center
                    ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark transition-colors'}`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t.checkout.submitButton.processing[language]}
                    </span>
                  ) : `${t.checkout.submitButton.pay[language]} ${formData.productType === 'digital' ? '$19.900 COP' : '$59.900 COP'}`}
                </button>
              </div>
              
              <div className="text-center">
                <Link to="/preview" className="text-primary hover:text-primary-dark text-sm">
                  {t.checkout.backToPreview[language]}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 