import { LOGO } from "../utils/constants";
const Card = (props) => {
  const { resData } = props;
  console.log(resData.data.type);
  return (
    <div className="card  hover:shadow-xl" style={{ width: "250px" }} id="card">
      <img
        className="card-img-top"
        src={LOGO + resData.data.cloudinaryImageId}
        alt="this is the image"
      />
      <div className="card-body">
        <h5 className="card-title restaurant-name">{resData.data.name}</h5>
        <h4 className="restaurant-cuisines" style={{ marginTop: "15px" }}>
          {resData.data.cuisines.join(",")}
        </h4>
        <h4 className="restaurant-rating" style={{ marginTop: "15px" }}>
          {resData.data.avgRating}⭐
        </h4>
        <h4 className="restaurant-cost">₹{resData.data.costForTwo / 100}</h4>
        <a href="#" className="btn btn-success" style={{ marginTop: "15px" }}>
          Order Now!
        </a>
      </div>
    </div>
  );
};
export default Card;
