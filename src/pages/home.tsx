import { Hero } from "../components/Hero";
import Header from "../shared/Header";

export default function Home() {
  return (
    <>
      <Header withSearch={false} />
      <Hero />
    </>
  );
}
