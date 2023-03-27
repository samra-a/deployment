import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter
} from "react-router-dom"
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {

  const loadCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json();
    return data;
  }

const router = createHashRouter([
  {
    path: "/",
    element: <Welcome/>,
    children: [
  ,
  {
    path:"/about",
    element: <About/>,
    loader: loadCountries
  },
  {
    path:"/projects",
    element: <Projects/>
  },
  {
    path:"/contact",
    element: <Contact/>
  }
]
  }
])

  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
