import { useState } from "react";
import { mastercard, payIcon, verve } from "../assets/imagesAndIcons";
import Button from "../shared/Button";
import InputField from "../shared/InputField";
import SuccessModal from "../shared/SuccessModal";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  isActive: boolean;
  quantity: number;
  totalPrice: number;
}

export default function CheckoutBox() {
  const [modal, setModal] = useState<boolean>(false);

  // Fetch cart data from localStorage
  const cartData: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // State to store cart items
  const cart = cartData;

  const totalAmount = cart.reduce(
    (accumulator, product) => accumulator + product.totalPrice,
    0
  );

  function calculateTotalWithVAT(total: number, vatRate: number) {
    return total + total * vatRate;
  }

  const totalWithVAT = calculateTotalWithVAT(totalAmount, 0.0075);

  return (
    <section className="px-[2rem] lg:px-[7rem] mt-[5rem] lg:mt-[7rem] mb-[7rem] lg:mb-[10rem] ">
      <div className="lg:flex justify-between flex max-[1023px]:flex-col-reverse lg:border-t">
        <div className="lg:pt-[4rem]  lg:w-[40%]">
          <h2 className="text-[2.4rem] text-textBlack font-500 ">
            Payment details
          </h2>
          <div className="flex items-center mt-[2rem] mb-[3rem]">
            <p className="text-[1.6rem] text-textBlack">
              Credit card/Debit card
            </p>
            <div className="w-[2.4rem] lg:w-[3.2rem] mr-[1.6rem] ml-[2.4rem]">
              <img
                src={mastercard}
                alt="likes icon"
                width="100%"
                height="auto"
              />
            </div>
            <div className="w-[2.4rem] lg:w-[3.2rem]">
              <img src={verve} alt="likes icon" width="100%" height="auto" />
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="lg:flex justify-between">
              <div className="w-[100%] lg:w-[49%] mb-[1.6rem]">
                <InputField
                  title="First name"
                  placeholder="e.g Doe"
                  name="firstName"
                  value=""
                  norm
                />
              </div>
              <div className="w-[100%] lg:w-[49%] mb-[1.6rem]">
                <InputField
                  title="Last name"
                  placeholder="e.g John"
                  name="lastName"
                  value=""
                  norm
                />
              </div>
            </div>
            <div className="w-[100%] mb-[1.6rem]">
              <InputField
                title="Delivery Address"
                placeholder="e.g James oni road, GRA"
                name="deliveryAddress"
                value=""
                norm
              />
            </div>
            <div className="lg:flex justify-between mb-[1.6rem]">
              <div className="w-[100%] lg:w-[49%]">
                <InputField
                  title="Country"
                  name="country"
                  value="select country"
                  options={[
                    { label: "Nigeria", value: "ng" },
                    { label: "Ghana", value: "gn" },
                    { label: "SA", value: "sa" },
                  ]}
                  selectOptions
                />
              </div>
              <div className="w-[100%] lg:w-[49%]">
                <InputField
                  title="State"
                  name="state"
                  value="select state"
                  options={[
                    { label: "-- Select State --", value: "" },
                    { label: "Nigeria", value: "ng" },
                    { label: "Ghana", value: "gn" },
                    { label: "SA", value: "sa" },
                  ]}
                  selectOptions
                />
              </div>
            </div>
            <div>
              <p className="text-[1.6rem] text-textBlack mb-[.8rem]">
                Card details
              </p>
              <div>
                <div className="w-[100%]">
                  <InputField
                    placeholder="Card number"
                    name="cardNumber"
                    value=""
                    flat="rounded-tr-[.8rem] rounded-tl-[.8rem]"
                    norm
                  />
                </div>
                <div className="lg:flex">
                  <div className="w-[100%] lg:w-[50%]">
                    <InputField
                      placeholder="Expiry Date"
                      name="expiryDate"
                      value=""
                      norm
                      flat="rounded-0"
                    />
                  </div>
                  <div className="w-[100%] lg:w-[50%]">
                    <InputField
                      placeholder="CVV code"
                      name="cvvCode"
                      value=""
                      norm
                      flat="rounded-0"
                    />
                  </div>
                </div>
                <div className="w-[100%]">
                  <InputField
                    placeholder="Card pin"
                    name="cardPin"
                    value=""
                    norm
                    flat="rounded-br-[.8rem] rounded-bl-[.8rem]"
                  />
                </div>
              </div>
            </div>
            <p className="text-[1.4rem] text-reviewTextGrey mb-[1.6rem] mt-[2.4rem]">
              By clicking pay, you agree to Pick n buy{" "}
              <span className="text-[1.4rem] text-pnbPurple">Terms of Use</span>{" "}
              and{" "}
              <span className="text-[1.4rem] text-pnbPurple">
                Privacy Policy
              </span>
            </p>
            <div>
              <Button
                text="Pay"
                bg="bg-pnbPurple"
                textColor="text-white"
                fontSize="text-[1.4rem] lg:text-[1.6rem]"
                icon={payIcon}
                flipIcon
                gap="gap-x-[1rem]"
                handleClick={() => {
                  setModal(true);
                }}
              />
            </div>
          </form>
        </div>
        <div className="hidden lg:block w-[1px] h-[700px] border-r"></div>
        <div className="lg:w-[45%] lg:pt-[4rem] max-sm:mb-[3rem]">
          <h2 className="text-[2.4rem] text-textBlack font-500 ">
            Order summary
          </h2>
          {cart.map((product) => (
            <div className="flex mt-[1.6rem] w-[100%]" key={product.id}>
              <div className="lg:mr-[2rem] mr-[1rem] w-[18rem] lg:w-[15rem]">
                <img
                  src={product.image}
                  alt="product image"
                  width="100%"
                  height="auto"
                  className="rounded-[1.75rem] object-cover object-right  w-[12rem] h-[12rem] lg:w-[11rem] lg:h-[11rem]"
                />
              </div>
              <div className="w-[100%]">
                <div>
                  <div className="flex justify-between items-center mb-[1rem] ">
                    <p className="text-[1.6rem] lg:text-[2.4rem] text-textBlack">
                      {product.name}
                    </p>
                    <p className="text-textBlack text-[1.6rem] lg:text-[2.4rem]">
                      NGN {product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mb-[1rem] ">
                    <p className="text-reviewTextGrey text-[1.4rem] lg:text-[1.6rem]">
                      {product.quantity}
                    </p>
                    <p className="text-reviewTextGrey text-[1.4rem] lg:text-[1.6rem]">
                      NGN {product.totalPrice.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between mb-[1rem] mt-[2.4rem] lg:mt-[5rem]">
            <p className="text-[1.4rem] lg:text-[1.8rem] text-textBlack ">
              Subtotal
            </p>
            <p className="text-textBlack font-[500] text-[1.4rem] lg:text-[1.8rem]">
              NGN {totalAmount.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center justify-between mb-[1rem]">
            <p className="text-[1.6rem] lg:text-[2.4rem] text-textBlack">
              Total(VAT)
            </p>
            <p className=" text-textBlack font-[500] text-[1.6rem] lg:text-[2.4rem]">
              NGN {totalWithVAT.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      <SuccessModal isVisible={modal} handleCancel={() => setModal(false)} />
    </section>
  );
}
