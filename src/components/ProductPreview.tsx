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
type ExtraInfo = {
  id: string;
  key: string;
  value: string;
  value_dt: string | null;
};
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

  const { data, isPending } = useQuery({
    queryFn: () => getProducts(1),
    queryKey: ["ALL_PRODUCTS"],
  });

  const products = data && !("error" in data) ? data : null;

  const { data: singleProductData, isPending: isPendingSingleProductData } =
    useQuery({
      queryFn: () => getSingleProduct(id ?? ""),
      queryKey: ["SINGLE_PRODUCT"],
    });

  const product =
    singleProductData && !("error" in singleProductData)
      ? singleProductData
      : null;

  function getValueByKey(
    extraInfos: ExtraInfo[],
    key: string
  ): string | undefined {
    const info = extraInfos.find((info) => info.key === key);
    return info ? info.value : undefined;
  }

  // Get the values
  const gender = getValueByKey(product?.extra_infos || [], "gender");
  const count = getValueByKey(product?.extra_infos || [], "count");
  const rating = getValueByKey(product?.extra_infos || [], "rating");

  return (
    <section className="px-[2rem] lg:px-[7rem] mt-[5rem] mb-[9rem]">
      {isPendingSingleProductData && (
        <div className="flex justify-center items-center mb-[100vh] h-[100vh] w-[100vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              opacity="0.25"
            />
            <path
              fill="currentColor"
              d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            >
              <animateTransform
                attributeName="transform"
                dur="0.75s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </path>
          </svg>
        </div>
      )}

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
                {gender}
              </span>
            </p>
            <div className="flex items-center">
              <StarRating rating={Number(rating)} />
              <p className="text-textBlack text-[1.4rem] lg:text-[1.6rem]">
                {count}
              </p>
            </div>
            <p className="text-pnbPurple text-[1.4rem] lg:text-[1.6rem]">
              NGN {product?.current_price}
            </p>
          </div>
          <div className="max-sm:w-[100%] max-sm:mx-[-2rem] hidden lg:block">
            <div className="flex gap-x-[1.2rem] mb-[2rem]">
              <p className="text-[1.6rem] font-[500] text-textBlack">Reviews</p>
              <StarRating rating={Number(rating) ?? 1} />
              <p className="text-[1.6rem] font-[500] text-textBlack">
                {Number(count) ?? 1}{" "}
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
              <StarRating rating={Number(rating) ?? 1} />
              <p className="text-[1.6rem] font-[500] text-textBlack">
                {Number(count) ?? 1}
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
                  navigate(`/product?id=${item.id}`);
                  window.location.reload();
                }}
              />
            ))}
        </div>
      </div>
      {isPending && (
        <div className="flex flex-wrap justify-between gap-[2rem]">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index}>
              <div className="rounded-[1.6rem] w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem] bg-lightBoxPurple mb-[2rem] animate-pulse"></div>
              <div className="mt-[1rem]  w-[15rem] lg:w-[20rem]">
                <p className="text-textBlack h-[1.4rem] lg:h-[2rem] w-[13rem] lg:w-[18rem] bg-lightBoxPurple mb-[1rem] animate-pulse"></p>
                <p className="text-pnbPurple h-[1.4rem] lg:h-[2rem] w-[12rem] lg:w-[17rem] bg-lightBoxPurple animate-pulse"></p>
              </div>
            </div>
          ))}
        </div>
      )}

      {data && "error" in data && (
        <p className="text-[1.6rem] text-red-400 font-[600]">
          Couldn't Fetch Products. Please try again
        </p>
      )}
    </section>
  );
}
