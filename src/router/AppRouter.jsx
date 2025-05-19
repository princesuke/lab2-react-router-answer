import {BrowserRouter, Routes, Route } from 'react-router';
import Layout from '../components/Layout';
import News from '../pages/News';
import Subscribe from '../pages/Subscribe';
import NotFound from '../pages/NotFound';
import Success from '../pages/Success';
import ProductLayout from '../components/ProductLayout';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/news" element={<News />} />
                    <Route path="/subscribe" element={<Subscribe />} />
                    <Route path="/success/:email" element={<Success />} />
                    <Route path="*" element={<NotFound />} />


                    <Route path="/products" element={<ProductLayout />}>
                        <Route index element={<ProductList />} />
                        <Route path=":id" element={<ProductDetail />} />
                    </Route>


                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;