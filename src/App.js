import './App.css';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import  Home from "../src/pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Education";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

function App() {
  return (    <ChakraProvider><div className={"full_app"}><Header/><div className="App"> <Home/><About/><Skills/>
        <Experience/>

          <Projects/>
          <Contact/>

  </div><Footer/></div></ChakraProvider>
  );
}

export default App;
