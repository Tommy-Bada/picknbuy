import { useState } from "react";
import FilterButton from "../shared/FilterButton";
import { testImage } from "../assets/imagesAndIcons";
import Product from "../shared/Product";
const sampleProducts = [
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
  },
];
export default function Products() {
  const [sortBy, setSortBy] = useState<string>("");
  return (
    <section className="px-[2rem] lg:px-[7rem] pt-[4rem] lg:pt-[8rem] pb-[10rem] lg:pb-[20rem]">
      <h2 className="text-[2.4rem] text-pnbPurple font-[500]">Products</h2>
      <div className="flex items-center gap-x-[1.6rem] my-[4rem]">
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
      </div>
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
          />
        ))}
      </div>
    </section>
  );
}
