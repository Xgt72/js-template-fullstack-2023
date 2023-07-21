import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const datas = [
  {
    id: 1,
    image: "src/assets/images/gym1.jpg",
    title: "Gym1",
  },
  {
    id: 2,
    image: "src/assets/images/gym2.jpg",
    title: "Gym2",
  },
  {
    id: 3,
    image: "src/assets/images/gym3.jpg",
    title: "Labo",
  },
  {
    id: 4,
    image: "src/assets/images/gym4.jpg",
    title: "Surgery",
  },
];

export default function Carrousel() {
  return (
    <div className="w-screen mt-5">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="h-full"
      >
        {datas.map((data) => (
          <div key={data.id}>
            <img
              src={data.image}
              alt={data.title}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
