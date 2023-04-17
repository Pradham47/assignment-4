import { useDeferredValue } from "react";

const Carousel = () => {
  return (
    <div className="carousel bg-slate-900" id="carousel">
      <div className="image-container hover:border-neutral-300">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
          className="carousel-image"
        ></img>
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/tgnvusbs3fnzz7xupeno"
          className="carousel-image"
        ></img>
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/nhubtkw7dukg3ukcmpam"
          className="carousel-image"
        ></img>
      </div>
    </div>
  );
};
export default Carousel;