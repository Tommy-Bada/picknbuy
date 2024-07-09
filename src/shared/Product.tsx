import StarRating from "./StarRating";
interface ProductProps {
  src: string;
  name: string;
  gender: string;
  rating: number;
  count: number;
  price: number;
  handleClick: () => void;
}
export default function Product({
  src,
  name,
  gender,
  rating,
  count,
  price,
  handleClick,
}: ProductProps) {
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div>
        <img
          src={src}
          alt="product image"
          width="100%"
          height="auto"
          className="rounded-[1.6rem] w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem] object-cover object-center "
        />
      </div>
      <div className="mt-[1rem]">
        <p className="text-textBlack text-[1.4rem] lg:text-[1.6rem]">
          {name}{" "}
          <span className="text-pnbPurple text-[1.4rem] lg:text-[1.6rem] lg:ml-[.8rem] ml-[.4rem]">{`(${gender})`}</span>
        </p>
        <div className="flex">
          <StarRating rating={rating} />
          <p className="text-textBlack text-[1.4rem] lg:text-[1.6rem]">{`(${count})`}</p>
        </div>
        <p className="text-pnbPurple text-[1.4rem] lg:text-[1.6rem]">{`$${price}`}</p>
      </div>
    </div>
  );
}
