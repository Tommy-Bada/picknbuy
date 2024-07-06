import { Hero } from "../components/Hero";
import Products from "../components/Products";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function Home() {
  return (
    <>
      <Header withSearch={false} />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}
