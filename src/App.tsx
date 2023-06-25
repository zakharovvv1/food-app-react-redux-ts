import Header from "./components/01.Header/Header";
import Hero from "./components/02. Hero/Hero";
import Navbar from "./components/03.Navbar/Navbar";
import "./App.css";

import Main from "./components/04.Main/Main";
import AllMain from "./components/06. AllMain/AllMain";
import About from "./components/07.About/About";
import Footer from "./components/09.Footer/Footer";
import Contacts from "./components/08.Contacts/Contacts";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Navbar />
      <AllMain />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
