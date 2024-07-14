import { useNavigate, useSearchParams } from "react-router-dom";
import { addedIcon } from "../assets/imagesAndIcons";
import Button from "../shared/Button";
import Product from "../shared/Product";
import StarRating from "../shared/StarRating";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts, getSingleProduct } from "../network/products";
interface ReviewBoxProp {
  num: number;
  name: string;
  date: string;
  review: string;
}

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  isActive: boolean;
  quantity: number;
  totalPrice: number;
}

export function ReviewBox({ num, name, date, review }: ReviewBoxProp) {
  return (
    <div className="p-[1.6rem] lg:p-0 border lg:border-none rounded-[.8rem] lg:rounded-0">
      <StarRating rating={num} />
      <p className="text-reviewTextGrey text-[1.4rem] my-[1rem]">
        {name}
        {" . "} {date}
      </p>
      <p className="text-[1.4rem] text-textBlack w-[24.5rem] lg:w-[33rem]">
        {review}
      </p>
    </div>
  );
}

export function ProductPreview() {
  const [addedToCart, setAddedToCart] = useState<boolean>();
  const navigate = useNavigate();
  const [getParams] = useSearchParams();
  const id = getParams.get("id");

  const [items, setItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? (JSON.parse(storedCart) as CartItem[]) : [];
  });

  function addToCart(id: string, name: string, image: string, price: number) {
    const productAddedToCart = {
      id: id,
      name: name,
      image: image,
      price: price,
      isActive: true,
      quantity: 1,
      totalPrice: price,
    };
    setItems((prevItem) => {
      return [...prevItem, productAddedToCart];
    });
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const isInCart = (id: string) => {
    return items.some((item) => item.id === id);
  };

  const { data } = useQuery({
    queryFn: () => getProducts(1),
    queryKey: ["ALL_PRODUCTS"],
  });

  const products = data && !("error" in data) ? data : null;

  const { data: singleProductData } = useQuery({
    queryFn: () => getSingleProduct(id ?? ""),
    queryKey: ["SINGLE_PRODUCT"],
  });

  const product =
    singleProductData && !("error" in singleProductData)
      ? singleProductData
      : null;

  return (
    <section className="px-[2rem] lg:px-[7rem] mt-[5rem] mb-[9rem]">
      <div className="lg:flex justify-between">
        <div className=" flex flex-col lg:items-center w-[100%] lg:w-[65%]">
          <div>
            <img
              src={
                `https://api.timbu.cloud/images/${product?.photos[0]?.url}` ??
                ""
              }
              alt="product image"
              width="100%"
              height="auto"
              className="rounded-[4rem] w-[100%] h-[90vw] lg:w-[42rem] lg:h-[42rem] object-cover object-right "
            />
          </div>
          <div className="hidden lg:flex items-center justify-center gap-x-[1.6rem] lg:my-[4.4rem] ">
            <div>
              <img
                src={
                  `https://api.timbu.cloud/images/${product?.photos[0]?.url}` ??
                  ""
                }
                alt="product image"
                width="100%"
                height="auto"
                className="rounded-[.5rem] w-[5rem] h-[5rem] object-cover object-right "
              />
            </div>
            <div>
              <img
                src={
                  `https://api.timbu.cloud/images/${product?.photos[0]?.url}` ??
                  ""
                }
                alt="product image"
                width="100%"
                height="auto"
                className="rounded-[.5rem] w-[5rem] h-[5rem] object-cover object-right "
              />
            </div>
            <div>
              <img
                src={
                  `https://api.timbu.cloud/images/${product?.photos[0]?.url}` ??
                  ""
                }
                alt="product image"
                width="100%"
                height="auto"
                className="rounded-[.5rem] w-[5rem] h-[5rem] object-cover object-right "
              />
            </div>
            <div>
              <img
                src={
                  `https://api.timbu.cloud/images/${product?.photos[0]?.url}` ??
                  ""
                }
                alt="product image"
                width="100%"
                height="auto"
                className="rounded-[.5rem] w-[5rem] h-[5rem] object-cover object-right "
              />
            </div>
          </div>
          <div className="mt-[1rem] lg:hidden mb-[2rem]">
            <p className="text-textBlack text-[1.4rem] lg:text-[1.6rem]">
              {product?.name}{" "}
              <span className="text-pnbPurple text-[1.4rem] lg:text-[1.6rem] lg:ml-[.8rem] ml-[.4rem]">
                {product?.extra_infos[0].value}
              </span>
            </p>
            <div className="flex items-center">
              <StarRating rating={Number(product?.extra_infos[1]?.value)} />
              <p className="text-textBlack text-[1.4rem] lg:text-[1.6rem]">
                {product?.extra_infos[2]?.value}
              </p>
            </div>
            <p className="text-pnbPurple text-[1.4rem] lg:text-[1.6rem]">
              NGN {product?.current_price}
            </p>
          </div>
          <div className="max-sm:w-[100%] max-sm:mx-[-2rem] hidden lg:block">
            <div className="flex gap-x-[1.2rem] mb-[2rem]">
              <p className="text-[1.6rem] font-[500] text-textBlack">Reviews</p>
              <StarRating rating={Number(product?.extra_infos[0].value) ?? 1} />
              <p className="text-[1.6rem] font-[500] text-textBlack">
                {Number(product?.extra_infos[1].value) ?? 1}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%]  lg:w-[34.4rem]">
          <div className="mb-[1.5rem] hidden sm:flex  justify-between items-center">
            <p className="text-[1.6rem]">{product?.name}</p>
          </div>
          <p className="text-[1.6rem] mb-[2rem] hidden sm:block">
            NGN {product?.current_price?.toLocaleString()}
          </p>
          {addedToCart ? (
            <div className="w-[100%] mb-[1.6rem]">
              <Button
                bg={"bg-transparent"}
                text="Added to cart"
                textColor="text-pnbPurple"
                fontSize="text-[1.4rem] lg:text-[1.6rem]"
                border
                icon={addedIcon}
                gap="gap-x-[1rem]"
                handleClick={() => {
                  setAddedToCart(false);
                }}
                isDisble
              />
            </div>
          ) : (
            <div className="w-[100%] mb-[1.6rem]">
              <Button
                bg={"bg-transparent"}
                text="Add to cart"
                textColor="text-pnbPurple"
                fontSize="text-[1.4rem] lg:text-[1.6rem]"
                border
                handleClick={() => {
                  setAddedToCart(true);
                  if (!isInCart(product?.id ?? "")) {
                    addToCart(
                      product?.id ?? "",
                      product?.name ?? "",
                      `https://api.timbu.cloud/images/${product?.photos[0]?.url}`,
                      product?.current_price ?? 0
                    );
                  }
                }}
              />
            </div>
          )}
          <div className="w-[100%] mb-[3rem] lg:mb-[6rem]">
            <Button
              bg={"bg-pnbPurple"}
              text="Go to cart"
              textColor="text-white"
              fontSize="text-[1.4rem] lg:text-[1.6rem]"
              handleClick={() => navigate(`/cart?`)}
            />
          </div>
          <p className="text-textBlack text-[1.6rem] mb-[1rem]">Description</p>
          <p className="text-textBlack text-[1.3rem] mb-[1rem]">
            {product?.description}
          </p>

          <div className="w-[100%] mt-[4rem] block sm:hidden ">
            <div className="flex gap-x-[1.2rem] mb-[2rem]">
              <p className="text-[1.6rem] font-[500] text-textBlack">Reviews</p>
              <StarRating rating={Number(product?.extra_infos[1].value) ?? 1} />
              <p className="text-[1.6rem] font-[500] text-textBlack">
                {Number(product?.extra_infos[2].value) ?? 1}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[7rem] lg:mt-[10rem]">
        <h2 className="text-[2.4rem] text-pnbPurple font-[500] mb-[3rem] lg:mb-[4rem]">
          You may also like
        </h2>
        <div className="flex flex-wrap gap-x-[2rem] gap-y-[3rem]">
          {products &&
            products?.items.map((item) => (
              <Product
                key={item.id}
                src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
                name={item.name}
                price={item.current_price[0].NGN[0]}
                handleClick={() => {
                  navigate(
                    `/product?id=${item.id}`
                    // `/${item.url}?image=${item.src}&name=${item.name}&gender=${item.gender}&price=${item.price}`
                  );
                  window.location.reload();
                }}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
