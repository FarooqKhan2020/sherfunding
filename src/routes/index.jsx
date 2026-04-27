import { createBrowserRouter } from 'react-router-dom'
import App from './../App'
import HomePage from '../pages/HomePage'
import FromPage from '../pages/FromPage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import ContactPage from '../pages/ContactPage'
import ApplyNowPage from '../pages/ApplyNowPage'
import CheckoutPage from '../pages/CheckoutPage' 
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import TermsConditionPage from '../pages/TermsConditionPage'
import ServiceDetail from '../Components/ServiceDetail/ServiceDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            { index: true, element: <HomePage /> },
            { path: 'form', element: <FromPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'services', element: <ServicesPage /> },
            { path: 'contact', element: <ContactPage /> },
            // { path: 'test', element: <Test /> },
            { path: 'applynow', element: <ApplyNowPage /> },
            { path: 'checkout', element: <CheckoutPage /> },
            { path: 'privacypolicy', element: <PrivacyPolicyPage /> },
            { path: 'termscondition', element: <TermsConditionPage /> },
            { path: 'services/:slug', element: <ServiceDetail /> },
        ]
    }
])

export default router;