import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div data-theme="light" className='max-w-7xl mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      {/* <Toaster /> */}
    </div>
  );
}

export default App;
