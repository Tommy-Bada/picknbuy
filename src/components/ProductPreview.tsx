import { useNavigate } from "react-router-dom";
import {
  addSizeIcon,
  addedIcon,
  nikeIcon,
  reduceSizeIcon,
  testImage,
} from "../assets/imagesAndIcons";
import Button from "../shared/Button";
import Product from "../shared/Product";
import StarRating from "../shared/StarRating";
import { useState } from "react";
interface ReviewBoxProp {
  num: number;
  name: string;
  date: string;
  review: string;
}
const sampleProducts = [
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
];
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

const sampleReview = [
  {
    num: 5,
    name: "Oluwakemi",
    date: "June 16",
    review:
      "Extremely comfortable and durable. After four years of spring to fall wear with my first pair I had to replace due to tread wearing.",
  },
  {
    num: 5,
    name: "David",
    date: "June 16",
    review:
      "  As most of the Nike’s reviews say, these shoes were crazy comfy from the first moment I put them on. ",
  },
];

export function ProductPreview() {
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<number>(38);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <section className="px-[2rem] lg:px-[7rem] mt-[5rem] mb-[9rem]">
      <div className="lg:flex justify-between">
        <div className=" flex flex-col lg:items-center w-[100%] lg:w-[65%]">
          <div>
            <img
              src={testImage}
              alt="product image"
              width="100%"
              height="auto"
              className="rounded-[4rem] w-[100%] h-[90vw] lg:w-[42rem] lg:h-[42rem] object-cover object-right "
            />
          </div>
          <div className="hidden lg:flex items-center justify-center gap-x-[1.6rem] lg:my-[4.4rem] ">
            <div>
              <img
                src={testImage}
                alt="product image"
                width="100%"
                height="auto"
                className="rounded-[.5rem] w-[5rem] h-[5rem] object-cover object-right "
              />
            </div>
            <div>
              <img
                src={testImage}
                alt="product image"
                width="100%"
                height="auto"
                className="rounded-[.5rem] w-[5rem] h-[5rem] object-cover object-right "
              />
            </div>
            <div>
              <img
                src={testImage}
                alt="product image"
                width="100%"
                height="auto"
                className="rounded-[.5rem] w-[5rem] h-[5rem] object-cover object-right "
              />
            </div>
            <div>
              <img
                src={testImage}
                alt="product image"
                width="100%"
                height="auto"
                className="rounded-[.5rem] w-[5rem] h-[5rem] object-cover object-right "
              />
            </div>
          </div>
          <div className="mt-[1rem] lg:hidden mb-[2rem]">
            <p className="text-textBlack text-[1.4rem] lg:text-[1.6rem]">
              Nike sneakers{" "}
              <span className="text-pnbPurple text-[1.4rem] lg:text-[1.6rem] lg:ml-[.8rem] ml-[.4rem]">
                Unisex
              </span>
            </p>
            <div className="flex">
              <StarRating rating={4} />
              <p className="text-textBlack text-[1.4rem] lg:text-[1.6rem]">
                10
              </p>
            </div>
            <p className="text-pnbPurple text-[1.4rem] lg:text-[1.6rem]">
              $100
            </p>
          </div>
          <div className="max-sm:w-[100%] max-sm:mx-[-2rem] hidden lg:block">
            <div className="flex gap-x-[1.2rem] mb-[2rem]">
              <p className="text-[1.6rem] font-[500] text-textBlack">Reviews</p>
              <StarRating rating={4} />
              <p className="text-[1.6rem] font-[500] text-textBlack">4.8</p>
            </div>
            <div className="flex flex-wrap gap-x-[1.6rem] lg:gap-x-[5.6rem] overflow-x-auto">
              {sampleReview.map((item, index) => (
                <ReviewBox
                  key={index}
                  num={item.num}
                  name={item.name}
                  date={item.date}
                  review={item.review}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100%]  lg:w-[34.4rem]">
          <div className="hidden lg:flex items-center mb-[1rem]">
            <div className="w-[3.2rem] lg:w-[3.2rem] mr-[.6rem] ">
              <img
                src={nikeIcon}
                alt="search icon"
                width="100%"
                height="auto"
                className="rounded-[.4rem] border-searchBorderGrey border-[1px] "
              />
            </div>
            <p className="text-[1.4rem] text-textBlack">Nike</p>
          </div>
          <div className="mb-[1.5rem] hidden sm:flex  justify-between items-center">
            <p className="text-[1.6rem]">Nike sneakers - Anorak</p>
            {/* <div className="w-[4.4rem] h-[4.4rem] rounded-full border-searchBorderGrey border-[1px] flex justify-center items-center">
              <img
                src={likeIcon}
                alt="search icon"
                width="20px"
                height="20px"
              />
            </div> */}
          </div>
          <p className="text-[1.6rem] mb-[2rem] hidden sm:block">$100.00</p>
          <div className="flex justify-between items-center mb-[2rem]">
            <p className="text-[1.6rem]">Color</p>
            <div className="text-[1.4rem]">Randy Orange</div>
          </div>
          <div className="flex justify-between items-center mb-[2rem]">
            <p className="text-[1.6rem]">Size</p>
            <div className="flex items-center">
              <div className="text-[1.4rem]">{size}</div>
              <div>
                <div
                  className="px-[1.4rem] py-[.6rem] cursor-pointer"
                  onClick={() => {
                    size < 49 && setSize((prev) => prev + 1);
                  }}
                >
                  <img
                    src={addSizeIcon}
                    alt="search icon"
                    width="9px"
                    height="auto"
                  />
                </div>
                <div
                  className="px-[1.4rem] py-[.6rem] cursor-pointer"
                  onClick={() => {
                    size > 38 && setSize((prev) => prev - 1);
                  }}
                >
                  <img
                    src={reduceSizeIcon}
                    alt="search icon"
                    width="9px"
                    height="auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-[2rem]">
            <p className="text-[1.6rem]">Quantity</p>
            <div className="flex items-center">
              <div
                className="text-[1.4rem] bg-searchBackgroundGrey py-[1rem] px-[1.5rem] rounded-tl-[.8rem] rounded-bl-[.8rem] cursor-pointer"
                onClick={() => {
                  quantity > 1 && setQuantity((prev) => prev - 1);
                }}
              >
                -
              </div>
              <div className="text-[1.4rem] bg-searchBackgroundGrey py-[1rem] px-[1.5rem]">
                {quantity}
              </div>
              <div
                className="text-[1.4rem] bg-searchBackgroundGrey py-[1rem] px-[1.5rem] rounded-tr-[.8rem] rounded-br-[.8rem] cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </div>
            </div>
          </div>
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
                }}
              />
            </div>
          )}
          <div className="w-[100%] mb-[3rem] lg:mb-[6rem]">
            <Button
              bg={"bg-pnbPurple"}
              text="Buy Now"
              textColor="text-white"
              fontSize="text-[1.4rem] lg:text-[1.6rem]"
              handleClick={() => navigate("/checkout")}
            />
          </div>
          <p className="text-textBlack text-[1.6rem] mb-[1rem]">Description</p>
          <p className="text-textBlack text-[1.4rem] font-[500] mb-[1rem]">
            **Anoraks are made to order. Please allow 3-5 days for your order to
            ship. No returns.**
          </p>
          <p className="text-textBlack text-[1.3rem] mb-[1rem]">
            Welcome Washington Area Bicyclist Association supporters! 15% of
            sales go to WABA, supporting their mission. Empowering people to
            ride bikes,build con...{" "}
            <span className="text-[1.3rem]">View More</span>
          </p>
          <p className="text-textBlack text-[1.3rem] mb-[1rem]">
            The Nike WABA is also a running shoe designed for athletes who
            demand peak performance. It features a revolutionary new cushioning
            system that delivers an incredibly energetic ride. The breathable
            knit upper and sleek design make this shoe both functional and
            stylish.
          </p>
          {/* <div className="w-[100%] mb-[.8rem]">
            <Button
              bg={"bg-searchBackgroundGrey"}
              text="More details at Nike"
              textColor="text-textBlack"
              icon={linkIcon}
              iconWidth="w-[1rem]"
              fontSize="text-[1.4rem]"
              gap="gap-x-[2rem]"
              flipIcon
              handleClick={() => {}}
            />
          </div> */}
          {/* <div className="flex justify-between items-center">
            <div className="w-[49%]">
              <Button
                bg={"bg-searchBackgroundGrey"}
                text="Shipping Policy"
                textColor="text-textBlack"
                fontSize="text-[1.4rem]"
                handleClick={() => {}}
              />
            </div>
            <div className="w-[49%]">
              <Button
                bg={"bg-searchBackgroundGrey"}
                text="Refund Policy"
                textColor="text-textBlack"
                fontSize="text-[1.4rem]"
                handleClick={() => {}}
              />
            </div>
          </div> */}
          <div className="w-[100%] mt-[4rem] block sm:hidden ">
            <div className="flex gap-x-[1.2rem] mb-[2rem]">
              <p className="text-[1.6rem] font-[500] text-textBlack">Reviews</p>
              <StarRating rating={4} />
              <p className="text-[1.6rem] font-[500] text-textBlack">4.8</p>
            </div>
            <div className="flex gap-x-[1.6rem] lg:gap-x-[5.6rem] overflow-x-auto">
              {sampleReview.map((item, index) => (
                <ReviewBox
                  key={index}
                  num={item.num}
                  name={item.name}
                  date={item.date}
                  review={item.review}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[7rem] lg:mt-[10rem]">
        <h2 className="text-[2.4rem] text-pnbPurple font-[500] mb-[3rem] lg:mb-[4rem]">
          You may also like
        </h2>
        <div className="flex flex-wrap gap-x-[2rem] gap-y-[3rem]">
          {sampleProducts.map((item, index) => (
            <Product
              key={index}
              src={item.src}
              name={item.name}
              gender={item.gender}
              rating={item.rating}
              count={item.count}
              price={item.price}
              handleClick={() => navigate(`/${item.url}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
