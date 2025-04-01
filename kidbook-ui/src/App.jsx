import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BookCreator from './pages/BookCreator';
import BookPreview from './pages/BookPreview';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [bookData, setBookData] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<BookCreator setBookData={setBookData} />} />
        <Route path="preview" element={<BookPreview bookData={bookData} />} />
        <Route path="checkout" element={<Checkout bookData={bookData} />} />
        <Route path="confirmation" element={<OrderConfirmation />} />
        <Route path="admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App; 