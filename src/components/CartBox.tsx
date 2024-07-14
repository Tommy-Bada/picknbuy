import { useNavigate } from "react-router-dom";
import { deleteIcon } from "../assets/imagesAndIcons";
import Button from "../shared/Button";
import Product from "../shared/Product";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../network/products";
interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  isActive: boolean;
  quantity: number;
  totalPrice: number;
}
export default function CartBox() {
  const navigate = useNavigate();

  const { data, isPending } = useQuery({
    queryFn: () => getProducts(1),
    queryKey: ["ALL_PRODUCTS"],
  });

  const products = data && !("error" in data) ? data : null;

  // Fetch cart data from localStorage
  const cartData: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // State to store cart items
  const [cart, setCart] = useState<CartItem[]>(cartData);

  // Increase quantity of an item
  function increaseQuantity(id: string) {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
          totalPrice: product.totalPrice + product.price,
        };
      } else {
        return product;
      }
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  // Decrease quantity of an item
  function decreaseQuantity(id: string) {
    const newCart = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
          totalPrice: product.totalPrice - product.price,
        };
      } else {
        return product;
      }
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  // Delete a product from the cart
  function deleteProduct(id: string) {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  // Clear the cart
  function clearCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  // Calculate total amount
  const totalAmount = cart.reduce(
    (accumulator, product) => accumulator + product.totalPrice,
    0
  );

  return (
    <section className="px-[2rem] lg:px-[7rem] pt-[4rem] lg:pt-[8rem] pb-[7rem] lg:pb-[10rem]">
      <div className="lg:border lg:flex lg:rounded-[3.2rem]  ">
        <div className="lg:px-[6rem] lg:py-[4rem] p-0 lg:w-[60%]">
          {cart.length ? (
            cart?.map((product) => (
              <div
                className="flex mt-[1.6rem] w-[100%] mb-[2rem]"
                key={product.id}
              >
                <div className="lg:mr-[3rem] mr-[1rem] w-[60%] lg:w-[40%]">
                  <img
                    src={product.image}
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
                        {product.name}
                      </p>
                      <p className=" text-pnbPurple lg:text-textBlack text-[1.6rem] lg:text-[2.4rem]">
                        NGN {product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-[2rem]">
                    <p className="text-[1.6rem]">Quantity</p>
                    <div className="flex items-center">
                      <div
                        className="text-[1.4rem] bg-searchBackgroundGrey py-[1rem] px-[1.5rem] rounded-tl-[.8rem] rounded-bl-[.8rem] cursor-pointer"
                        onClick={() => decreaseQuantity(product.id)}
                      >
                        -
                      </div>
                      <div className="text-[1.4rem] bg-searchBackgroundGrey py-[1rem] px-[1.5rem]">
                        {product.quantity}
                      </div>
                      <div
                        className="text-[1.4rem] bg-searchBackgroundGrey py-[1rem] px-[1.5rem] rounded-tr-[.8rem] rounded-br-[.8rem] cursor-pointer"
                        onClick={() => increaseQuantity(product.id)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <img src={deleteIcon} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-[2rem]">No product in cart yet</p>
          )}
        </div>
        <div className="lg:p-[4rem] lg:border-l-[1px] lg:w-[40%] max-sm:mt-[2.4rem] ">
          <div className="flex items-center justify-between mb-[1rem]">
            <p className="text-[1.6rem] lg:text-[2.4rem] text-textBlack">
              Subtotal
            </p>
            <p className=" text-pnbPurple lg:text-textBlack text-[1.6rem] lg:text-[2.4rem]">
              NGN {totalAmount.toLocaleString()}
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
      <div className="my-[2rem]">
        {" "}
        <Button
          bg={"bg-red-400"}
          text="Clear cart"
          textColor="text-white"
          fontSize="text-[1.4rem] lg:text-[1.6rem]"
          handleClick={clearCart}
        />
      </div>
      <div className="mt-[7rem] lg:mt-[10rem]">
        <h2 className="text-[2.4rem] text-pnbPurple font-[500] mb-[3rem] lg:mb-[4rem]">
          Recently Viewed
        </h2>
        <div className="flex flex-wrap gap-x-[2rem] gap-y-[3rem]">
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
      </div>
    </section>
  );
}
