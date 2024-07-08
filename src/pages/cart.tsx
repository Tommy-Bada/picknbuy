import CartBox from "../components/CartBox";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function Cart() {
  return (
    <>
      <Header withSearch />
      <CartBox />
      <Footer />
    </>
  );
}
