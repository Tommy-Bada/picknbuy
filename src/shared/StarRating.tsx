import { filledStar, unFilledStar } from "../assets/imagesAndIcons";

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const totalStars = 5;
  return (
    <div className="flex gap-x-[1rem] mr-[1rem] my-[.5rem]">
      {Array.from({ length: totalStars }, (_, index) => (
        <img
          key={index}
          src={index < rating ? filledStar : unFilledStar}
          alt={index < rating ? "Shaded star" : "Unshaded star"}
          width="15px"
          height="15px"
        />
      ))}
    </div>
  );
}
