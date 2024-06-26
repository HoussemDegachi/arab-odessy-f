import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slide } from "pure-react-carousel";

type RatedSwiperSlideProps = {
  image: string;
  locationName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  ratingCount: number;
  i: number;
};

export default function RatedSwiperSlide({
  image,
  locationName,
  rating,
  ratingCount,
  i,
}: RatedSwiperSlideProps) {
  return (
    <Slide index={i} className="mr-10 last:mr-0">
      <figure className="group overflow-hidden rounded">
        <img
          src={image}
          alt=""
          className="rounded group-hover:scale-110 duration-500"
        />
      </figure>
      <div>
        <h5 className="text-xl font-bold text-black">{locationName}</h5>
        <div className="flex items-center">
          {Array.from({ length: Math.round(rating) }).map((_, i) => (
            <FontAwesomeIcon
              icon={faStar}
              className="text-primary text-xl mr-1"
              key={i}
            />
          ))}
          {rating}
          {ratingCount}
        </div>
      </div>
    </Slide>
  );
}
