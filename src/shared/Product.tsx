import StarRating from "./StarRating";
interface ProductProps {
  src: string;
  name: string;
  gender: string;
  rating: number;
  count: number;
  price: number;
}
export default function Product({
  src,
  name,
  gender,
  rating,
  count,
  price,
}: ProductProps) {
  return (
    <div>
      <div>
        <img
          src={src}
          alt="product image"
          width="100%"
          height="auto"
          className="rounded-[1.6rem] w-[16rem] h-[16rem] lg:w-[20rem] lg:h-[20rem] object-cover object-right "
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
