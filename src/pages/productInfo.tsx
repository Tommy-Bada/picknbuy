import { ProductPreview } from "../components/ProductPreview";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

export default function ProductInfo() {
  return (
    <>
      <Header withSearch />
      <ProductPreview />
      <Footer />
    </>
  );
}
