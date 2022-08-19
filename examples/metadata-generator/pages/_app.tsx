import 'styles/global.css'
import 'react-toastify/dist/ReactToastify.css';
import 'degen/styles'
import { ThemeProvider } from 'degen'
import { ToastContainer } from 'react-toastify';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultMode="dark" defaultAccent="yellow">
      <Component {...pageProps} />
      <ToastContainer /> 
    </ThemeProvider>
  )
}

export default App
