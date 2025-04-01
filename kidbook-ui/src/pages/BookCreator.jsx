import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const BookCreator = ({ setBookData }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();
  const t = translations;
  
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    additionalNames: '',
    storyTheme: '',
    customTheme: '',
    illustrationStyle: ''
  });

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
    
    // In a real implementation, this would make API calls to generate content
    // For now, we'll simulate with a timeout and mock data
    setTimeout(() => {
      const mockGeneratedBook = {
        title: language === 'es' 
          ? `Las Aventuras de ${formData.childName}` 
          : `The Adventures of ${formData.childName}`,
        cover: '/mock-cover.png',
        childName: formData.childName,
        theme: formData.storyTheme,
        style: formData.illustrationStyle,
        pages: [
          {
            text: language === 'es'
              ? `Érase una vez, en un pueblo mágico, vivía un niño llamado ${formData.childName}. A ${formData.childName} le encantaba explorar y descubrir nuevas aventuras.`
              : `Once upon a time, in a magical village, there lived a child named ${formData.childName}. ${formData.childName} loved to explore and discover new adventures.`,
            image: '/mock-page1.png'
          },
          {
            text: language === 'es'
              ? `Un día, mientras jugaba en el jardín, ${formData.childName} encontró una pequeña llave dorada escondida entre las flores.`
              : `One day, while playing in the garden, ${formData.childName} found a small golden key hidden among the flowers.`,
            image: '/mock-page2.png'
          },
          // Additional blurred pages would be here
          {
            text: language === 'es' ? 'Contenido bloqueado' : 'Content locked',
            image: '/mock-page-blurred.png',
            blurred: true
          },
          {
            text: language === 'es' ? 'Contenido bloqueado' : 'Content locked',
            image: '/mock-page-blurred.png',
            blurred: true
          }
        ]
      };
      
      // Save the generated book data
      setBookData(mockGeneratedBook);
      setIsLoading(false);
      
      // Navigate to preview
      navigate('/preview');
    }, 3000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.bookCreator.title[language]}</h1>
      
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary-dark">{t.bookCreator.protagonist.title[language]}</h2>
            
            <div>
              <label htmlFor="childName" className="block text-gray-700 font-medium mb-2">
                {t.bookCreator.protagonist.name.label[language]}
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t.bookCreator.protagonist.name.placeholder[language]}
              />
            </div>
            
            <div>
              <label htmlFor="childAge" className="block text-gray-700 font-medium mb-2">
                {t.bookCreator.protagonist.age.label[language]}
              </label>
              <select
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{t.bookCreator.protagonist.age.select[language]}</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1} {t.bookCreator.protagonist.age.years[language]}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="additionalNames" className="block text-gray-700 font-medium mb-2">
                {t.bookCreator.protagonist.additionalNames.label[language]}
              </label>
              <input
                type="text"
                id="additionalNames"
                name="additionalNames"
                value={formData.additionalNames}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t.bookCreator.protagonist.additionalNames.placeholder[language]}
              />
              <p className="text-sm text-gray-500 mt-1">{t.bookCreator.protagonist.additionalNames.help[language]}</p>
            </div>
          </div>
          
          <div className="pt-4 space-y-4">
            <h2 className="text-xl font-bold text-primary-dark">{t.bookCreator.storyTheme.title[language]}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'valores', label: t.bookCreator.storyTheme.values.label[language], description: t.bookCreator.storyTheme.values.description[language] },
                { id: 'social', label: t.bookCreator.storyTheme.social.label[language], description: t.bookCreator.storyTheme.social.description[language] },
                { id: 'conocimiento', label: t.bookCreator.storyTheme.knowledge.label[language], description: t.bookCreator.storyTheme.knowledge.description[language] },
                { id: 'fantasia', label: t.bookCreator.storyTheme.fantasy.label[language], description: t.bookCreator.storyTheme.fantasy.description[language] }
              ].map(theme => (
                <div key={theme.id} className={`
                  border rounded-lg p-4 cursor-pointer transition-all
                  ${formData.storyTheme === theme.id 
                    ? 'border-primary bg-primary/10 ring-2 ring-primary' 
                    : 'border-gray-200 hover:border-primary/50'}
                `}
                onClick={() => setFormData(prev => ({ ...prev, storyTheme: theme.id }))}
                >
                  <div className="flex items-start">
                    <input
                      type="radio"
                      id={theme.id}
                      name="storyTheme"
                      value={theme.id}
                      checked={formData.storyTheme === theme.id}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <label htmlFor={theme.id} className="ml-2 cursor-pointer">
                      <div className="font-medium">{theme.label}</div>
                      <div className="text-sm text-gray-500">{theme.description}</div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={formData.storyTheme ? 'block' : 'hidden'}>
              <label htmlFor="customTheme" className="block text-gray-700 font-medium mb-2">
                {t.bookCreator.storyTheme.customization.label[language]}
              </label>
              <textarea
                id="customTheme"
                name="customTheme"
                value={formData.customTheme}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                rows="2"
                placeholder={t.bookCreator.storyTheme.customization.placeholder[language]}
              ></textarea>
            </div>
          </div>
          
          <div className="pt-4 space-y-4">
            <h2 className="text-xl font-bold text-primary-dark">{t.bookCreator.illustrationStyle.title[language]}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { id: 'pixar', label: t.bookCreator.illustrationStyle.pixar[language] },
                { id: 'disney', label: t.bookCreator.illustrationStyle.disney[language] },
                { id: 'watercolor', label: t.bookCreator.illustrationStyle.watercolor[language] },
                { id: 'cartoon', label: t.bookCreator.illustrationStyle.cartoon[language] },
                { id: 'minimalist', label: t.bookCreator.illustrationStyle.minimalist[language] }
              ].map(style => (
                <div key={style.id} className={`
                  border rounded-lg p-4 cursor-pointer text-center transition-all
                  ${formData.illustrationStyle === style.id 
                    ? 'border-primary bg-primary/10 ring-2 ring-primary' 
                    : 'border-gray-200 hover:border-primary/50'}
                `}
                onClick={() => setFormData(prev => ({ ...prev, illustrationStyle: style.id }))}
                >
                  <div className="h-24 mb-2 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{t.bookCreator.illustrationStyle.preview[language]}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <input
                      type="radio"
                      id={style.id}
                      name="illustrationStyle"
                      value={style.id}
                      checked={formData.illustrationStyle === style.id}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={style.id} className="cursor-pointer font-medium">
                      {style.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-6">
            <button
              type="submit"
              disabled={!formData.childName || !formData.storyTheme || !formData.illustrationStyle || isLoading}
              className={`
                w-full py-3 px-6 rounded-lg font-medium text-white text-center
                ${(!formData.childName || !formData.storyTheme || !formData.illustrationStyle || isLoading)
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary-dark transition-colors'}
              `}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t.bookCreator.submit.generating[language]}
                </span>
              ) : t.bookCreator.submit.button[language]}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCreator; 