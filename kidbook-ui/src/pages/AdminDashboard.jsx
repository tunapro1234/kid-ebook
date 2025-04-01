import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const mockOrders = [
  {
    id: 'CM-25849',
    customerName: 'Ana María Rodríguez',
    customerEmail: 'ana.rodriguez@example.com',
    bookTitle: 'Las Aventuras de Sofía',
    productType: 'digital',
    status: 'completed',
    date: '2023-11-20',
    total: '19.900'
  },
  {
    id: 'CM-36915',
    customerName: 'Carlos Gómez',
    customerEmail: 'carlos.gomez@example.com',
    bookTitle: 'Juan y la Aventura Espacial',
    productType: 'printed',
    status: 'processing',
    date: '2023-11-19',
    total: '59.900'
  },
  {
    id: 'CM-47312',
    customerName: 'Luisa Fernanda Valencia',
    customerEmail: 'luisa.valencia@example.com',
    bookTitle: 'Martín y el Reino de las Hadas',
    productType: 'printed',
    status: 'shipped',
    date: '2023-11-18',
    total: '59.900'
  },
  {
    id: 'CM-58263',
    customerName: 'Diego Alejandro Sánchez',
    customerEmail: 'diego.sanchez@example.com',
    bookTitle: 'Las Aventuras de Camila',
    productType: 'digital',
    status: 'completed',
    date: '2023-11-17',
    total: '19.900'
  }
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const { language } = useLanguage();
  const t = translations;
  
  // Filter orders based on search term
  const filteredOrders = orders.filter(order => 
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Stats
  const totalOrders = orders.length;
  const digitalOrders = orders.filter(order => order.productType === 'digital').length;
  const printedOrders = orders.filter(order => order.productType === 'printed').length;
  const totalRevenue = orders.reduce((acc, order) => acc + parseFloat(order.total), 0);
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t.adminDashboard.title[language]}</h1>
        <div>
          <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg">
            {t.adminDashboard.export[language]}
          </button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-gray-500 mb-2">{t.adminDashboard.stats.totalOrders[language]}</div>
          <div className="text-3xl font-bold">{totalOrders}</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-gray-500 mb-2">{t.adminDashboard.stats.digitalBooks[language]}</div>
          <div className="text-3xl font-bold">{digitalOrders}</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-gray-500 mb-2">{t.adminDashboard.stats.printedBooks[language]}</div>
          <div className="text-3xl font-bold">{printedOrders}</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-gray-500 mb-2">{t.adminDashboard.stats.totalRevenue[language]}</div>
          <div className="text-3xl font-bold">$M{totalRevenue.toFixed(3)}</div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button 
            className={`px-6 py-3 font-medium text-sm ${activeTab === 'orders' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('orders')}
          >
            {t.adminDashboard.tabs.orders[language]}
          </button>
          <button 
            className={`px-6 py-3 font-medium text-sm ${activeTab === 'books' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('books')}
          >
            {t.adminDashboard.tabs.books[language]}
          </button>
          <button 
            className={`px-6 py-3 font-medium text-sm ${activeTab === 'analytics' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('analytics')}
          >
            {t.adminDashboard.tabs.analytics[language]}
          </button>
        </div>
        
        {/* Orders Tab Content */}
        {activeTab === 'orders' && (
          <div className="p-6">
            <div className="mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder={t.adminDashboard.search.placeholder[language]} 
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.adminDashboard.ordersTable.headers.id[language]}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.adminDashboard.ordersTable.headers.customer[language]}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.adminDashboard.ordersTable.headers.book[language]}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.adminDashboard.ordersTable.headers.type[language]}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.adminDashboard.ordersTable.headers.status[language]}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.adminDashboard.ordersTable.headers.date[language]}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.adminDashboard.ordersTable.headers.total[language]}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.adminDashboard.ordersTable.headers.actions[language]}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>{order.customerName}</div>
                        <div className="text-xs text-gray-400">{order.customerEmail}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.bookTitle}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.productType === 'digital' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {order.productType === 'digital' 
                            ? t.adminDashboard.ordersTable.productType.digital[language] 
                            : t.adminDashboard.ordersTable.productType.printed[language]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-indigo-100 text-indigo-800'
                        }`}>
                          {order.status === 'completed' 
                            ? t.adminDashboard.ordersTable.status.completed[language] 
                            : order.status === 'processing' 
                              ? t.adminDashboard.ordersTable.status.processing[language] 
                              : t.adminDashboard.ordersTable.status.shipped[language]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${order.total} COP
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-primary hover:text-primary-dark">{t.adminDashboard.ordersTable.actions.view[language]}</button>
                        {order.productType === 'digital' ? (
                          <button className="ml-2 text-primary hover:text-primary-dark">{t.adminDashboard.ordersTable.actions.resend[language]}</button>
                        ) : (
                          <button className="ml-2 text-primary hover:text-primary-dark">{t.adminDashboard.ordersTable.actions.track[language]}</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Books Tab Content (placeholder) */}
        {activeTab === 'books' && (
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-500">{t.adminDashboard.placeholders.books[language]}</p>
            </div>
          </div>
        )}
        
        {/* Analytics Tab Content (placeholder) */}
        {activeTab === 'analytics' && (
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-500">{t.adminDashboard.placeholders.analytics[language]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 