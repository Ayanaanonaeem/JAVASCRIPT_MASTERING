import Button from "./components/Button";
import Header from "./components/Header";
import landingPageData from "./constant/webdata";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/testimonials";
import Footer from "./components/Footer";

function App() {
  const{header,hero,features,testimonials}=landingPageData
  
  
	return (
		<>
			<Header header={header}/>
			<Hero hero={hero}/>
      <Features features={features}/>
      <Testimonials testimonials={testimonials}/>
      <Footer header={header}/>
		</>
	);
}

export default App;
