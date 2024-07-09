import CheckoutBox from "../components/CheckoutBox";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function Checkout() {
  return (
    <>
      <Header withSearch />
      <CheckoutBox />
      <Footer />
    </>
  );
}
