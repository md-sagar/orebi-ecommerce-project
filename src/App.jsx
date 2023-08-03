
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"element={<RootLayout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
