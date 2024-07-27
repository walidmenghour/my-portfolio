import './App.css';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import  Home from "../src/pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
//    <Experience/>
// <Education/>
// <Projects/>
// todo : after compleiting the three sections we will push them for the public 
function App() {
  return (    <ChakraProvider>
        <div className={"full_app"}>
          <Header/>
          <div className="App">
            <Home/>
            <About/>
            <Skills/>
            <Experience/>
            <Education/>
            <Projects/>            
          <Contact/>
  </div><Footer/></div>
  </ChakraProvider>
  );
}

export default App;
