import About from "./components/about/About";
import ContactForm from "./components/contactForm/ContactForm";
import Header from "./components/header/Header";
import Interests from "./components/interests/Interests";

 


export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
}
