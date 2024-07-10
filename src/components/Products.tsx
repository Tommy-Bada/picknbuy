import Product from "../shared/Product";
import { useNavigate } from "react-router-dom";
const sampleProducts = [
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720555384/picknbuy/2cad1f8f8e7d8882e6ccc82d0634d414_bnbfsl.jpg",
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 960,
    url: "product",
    id: 1,
  },
  {
    src: " https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720555815/picknbuy/Rectangle_28_zkav4y.png",
    name: "Winter Jean Jacket",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 840,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556224/picknbuy/Rectangle_29_veyqmr.png",
    name: "Nike sneakers",
    gender: "Unisex",
    rating: 4,
    count: 10,
    price: 2200,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556226/picknbuy/Rectangle_31_k56vzw.png",
    name: "Swiss Jeans",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 4000,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556226/picknbuy/Rectangle_32_kaark7.png",
    name: "Nike black",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 1020,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556232/picknbuy/Rectangle_40_uqrdhd.png",
    name: "Nike air",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 3000,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556233/picknbuy/Rectangle_41_gir3ka.png",
    name: "Kinetix T-shirt",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 2300,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556234/picknbuy/Rectangle_39_kwistf.png",
    name: "Brown suede brogue",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 4500,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557265/picknbuy/Rectangle_50_jsuyvk.png",
    name: "Flower dress",
    gender: "Female",
    rating: 4,
    count: 10,
    price: 3800,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557261/picknbuy/Rectangle_48_mr9soe.png",
    name: "Kinetix shirts",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 1220,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557262/picknbuy/Rectangle_43_ijxddj.png",
    name: "Nike shoe",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 2220,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557264/picknbuy/Rectangle_49_jfhqut.png",
    name: "Louis vuitton",
    gender: "Female",
    rating: 4,
    count: 10,
    price: 1020,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557265/picknbuy/Rectangle_47_qdzwe7.png",
    name: "Next leather loafer",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 1450,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557266/picknbuy/Rectangle_46_gbrs82.png",
    name: "Zara shoe",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 1970,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557271/picknbuy/Rectangle_45_qugl9k.png",
    name: "Next shirts",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 1450,
    url: "product",
    id: 1,
  },
  {
    src: " https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720555815/picknbuy/Rectangle_28_zkav4y.png",
    name: "Winter Jean Jacket",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 840,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556232/picknbuy/Rectangle_40_uqrdhd.png",
    name: "Nike air",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 3000,
    url: "product",
    id: 1,
  },
  {
    src: "https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556226/picknbuy/Rectangle_32_kaark7.png",
    name: "Nike black",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 1020,
    url: "product",
    id: 1,
  },
];
export default function Products() {
  const navigate = useNavigate();
  // const [sortBy, setSortBy] = useState<string>("");
  return (
    <section className="px-[2rem] lg:px-[7rem] pt-[4rem] lg:pt-[8rem] pb-[7rem] lg:pb-[12rem]">
      <h2 className="text-[2.4rem] text-pnbPurple font-[500] mb-[3rem]">
        Products
      </h2>
      {/* <div className="flex items-center gap-x-[1.6rem] my-[4rem]">
        <FilterButton
          options={[
            { label: "Sort by", value: "" },
            { label: "category", value: "category" },
          ]}
          name="sort by"
          selectedValue={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        />
        <FilterButton
          name="price"
          options={[
            { label: "Price", value: "" },
            { label: "$100", value: "100" },
            { label: "$200", value: "200" },
            { label: "$500", value: "500" },
          ]}
          selectedValue={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        />
        <FilterButton
          name="gender"
          options={[
            { label: "Gender", value: "" },
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          selectedValue={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        />
      </div> */}
      <div className="mx-auto">
        <div className="flex flex-wrap gap-x-[2rem] gap-y-[3rem] justify-between">
          {sampleProducts.map((item, index) => (
            <Product
              key={index}
              src={item.src}
              name={item.name}
              gender={item.gender}
              rating={item.rating}
              count={item.count}
              price={item.price}
              handleClick={() =>
                navigate(
                  `/${item.url}?image=${item.src}&name=${item.name}&gender=${item.gender}&price=${item.price}`
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
