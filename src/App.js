import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootsLayout from "./layouts/RootsLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Book from "./pages/book";
import Parcel from "./pages/parcel";
import Contact from "./pages/contact";

const router= createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<RootsLayout/>}>
<Route index element={<Home/>}/>
<Route path="about" element={<About/>}/>
<Route path="book" element={<Book/>}/>
<Route path="parcel" element={<Parcel/>}/>
<Route path="contact" element={<Contact/>}/>



</Route>

  )
)

function App() {
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
