import { useNavigate } from "react-router-dom";
import { nikeIcon, testImage } from "../assets/imagesAndIcons";
import Button from "../shared/Button";
import Product from "../shared/Product";
const sampleProducts = [
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
    id: "product",
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
    id: "product",
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
    id: "product",
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
    id: "product",
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
    id: "product",
  },
  {
    src: testImage,
    name: "Rolex watch",
    gender: "Male",
    rating: 4,
    count: 10,
    price: 55.55,
    id: "product",
  },
];
export default function CartBox() {
  const navigate = useNavigate();
  return (
    <section className="px-[2rem] lg:px-[7rem] pt-[4rem] lg:pt-[8rem] pb-[7rem] lg:pb-[10rem]">
      <div className="lg:border lg:flex lg:rounded-[3.2rem]  ">
        <div className="lg:px-[6rem] lg:py-[4rem] p-0 lg:w-[60%]">
          <div className="flex items-center mb-[1rem]">
            <div className="w-[4.8rem] lg:w-[4.8rem] mr-[.6rem] p-[1.6rem] rounded-[.4rem] border-searchBorderGrey border-[1px] ">
              <img
                src={nikeIcon}
                alt="search icon"
                width="16px"
                height="auto"
                className=""
              />
            </div>
            <p className="text-[2.4rem] text-textBlack">Nike</p>
          </div>
          <div className="flex mt-[1.6rem] w-[100%]">
            <div className="lg:mr-[3rem] mr-[1rem] w-[60%] lg:w-[40%]">
              <img
                src={testImage}
                alt="product image"
                width="100%"
                height="auto"
                className="rounded-[1.75rem] object-cover object-right  w-[12rem] h-[12rem] lg:w-[17.5rem] lg:h-[17.5rem]"
              />
            </div>
            <div className="w-[100%] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-[1rem] ">
                  <p className="text-[1.6rem] lg:text-[2.4rem] text-textBlack">
                    Nike sneakers
                  </p>
                  <p className=" text-pnbPurple lg:text-textBlack text-[1.6rem] lg:text-[2.4rem]">
                    $100
                  </p>
                </div>
                <p className="text-reviewTextGrey text-[1.4rem] lg:text-[1.6rem]">
                  Randy orange / 42
                </p>
              </div>
              <div className="text-[1.4rem] lg:text-[1.6rem]">1</div>
            </div>
          </div>
        </div>
        <div className="lg:p-[4rem] lg:border-l-[1px] lg:w-[40%] max-sm:mt-[2.4rem] ">
          <div className="flex items-center justify-between mb-[1rem]">
            <p className="text-[1.6rem] lg:text-[2.4rem] text-textBlack">
              Subtotal
            </p>
            <p className=" text-pnbPurple lg:text-textBlack text-[1.6rem] lg:text-[2.4rem]">
              $100
            </p>
          </div>
          <div className="mt-[2.4rem] lg:mt-[3.2rem]  mb-[1.6rem] lg:mb-[2.4rem]">
            <Button
              bg={"bg-pnbPurple"}
              text="Continue to checkout"
              textColor="text-white"
              fontSize="text-[1.4rem] lg:text-[1.6rem]"
              handleClick={() => {
                navigate("/checkout");
              }}
            />
          </div>
          <p className="text-[1.4rem] lg:text-[1.6rem] text-textGrey text-center">
            Taxes and shipping calculated at checkout
          </p>
        </div>
      </div>
      <div className="mt-[7rem] lg:mt-[10rem]">
        <h2 className="text-[2.4rem] text-pnbPurple font-[500] mb-[3rem] lg:mb-[4rem]">
          Recently Viewed
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
              handleClick={() => navigate(`/${item.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
