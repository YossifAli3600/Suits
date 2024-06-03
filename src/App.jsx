import './App.css'
import { messages } from './translations/messages'
import { IntlProvider } from 'react-intl';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { useStore } from './zustand/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  const locale = useStore(state => state.lang) == "ltr" ? 'en' : 'ar';
  const translation = messages[locale];

  return (
    <IntlProvider locale={locale} messages={translation} defaultLocale='en' >
      <ToastContainer position={"top-right"} autoClose={3000} />
      <RouterProvider router={router} />
    </IntlProvider>
  )
}

export default App
