import { useQuery } from "@tanstack/react-query";
import Product from "../shared/Product";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../network/products";
import Button from "../shared/Button";
import { useState } from "react";
export default function Products() {
  const [page, setPage] = useState<number>(1);

  const { data } = useQuery({
    queryFn: () => getProducts(page),
    queryKey: ["ALL_PRODUCTS", page],
  });

  const products = data && !("error" in data) ? data : null;

  const navigate = useNavigate();
  return (
    <section className="px-[2rem] lg:px-[7rem] pt-[4rem] lg:pt-[8rem] pb-[7rem] lg:pb-[12rem]">
      <h2 className="text-[2.4rem] text-pnbPurple font-[500] mb-[3rem]">
        Products
      </h2>
      <div className="mx-auto">
        <div className="flex flex-wrap gap-x-[2rem] gap-y-[3rem] justify-between">
          {products &&
            products?.items.map((item) => (
              <Product
                key={item.id}
                src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
                name={item.name}
                price={item.current_price[0].NGN[0]}
                handleClick={() => navigate(`/product?id=${item.id}`)}
              />
            ))}
        </div>
      </div>
      <div className="flex justify-between my-[2rem] lg:my-[5rem]">
        <div className="w-[12rem]">
          <Button
            bg={"bg-transparent"}
            text="View Previous"
            textColor="text-pnbPurple"
            fontSize="text-[1.4rem] lg:text-[1.6rem]"
            border
            gap="gap-x-[1rem]"
            handleClick={() => {
              setPage((prev) => prev - 1);
            }}
            isDisble={!products?.previous_page}
          />
        </div>
        <div className="w-[12rem]">
          <Button
            bg={"bg-transparent"}
            text="View more"
            textColor="text-pnbPurple"
            fontSize="text-[1.4rem] lg:text-[1.6rem]"
            border
            gap="gap-x-[1rem]"
            handleClick={() => {
              setPage((prev) => prev + 1);
            }}
            isDisble={!products?.next_page}
          />
        </div>
      </div>
    </section>
  );
}
