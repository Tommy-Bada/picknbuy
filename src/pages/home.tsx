import { Hero } from "../components/Hero";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function Home() {
  return (
    <>
      <Header withSearch={false} />
      <Hero />
      <Footer />
    </>
  );
}
