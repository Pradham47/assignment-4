import React from "react";
import ReactDOM from "react-dom/client";
import resObj from "../utils/mockData";
import Navbar from "./Navbar";
import Card from "./Card";
import Carousel from "./Carousel";
import Footer from "./Footer";
// import { filterdList } from "./Search";
// import Search from "./Search";
import { useState } from "react";
let filterdList = [];
const Search = (props) => {
  const { restro, setrestro } = props;
  return (
    <div className="filter">
      <button
        className="filter-btn bg-cyan-200 hover:bg-cyan-400 text-#60a5fa font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => {
          filterdList = resObj.filter((res) => res.data.avgRating > 3.5);
          setrestro(filterdList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};
const Final = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resObj);
  return (
    <div className="final">
      <Navbar />
      <Carousel />
      <Search restro={listOfRestaurants} setrestro={setlistOfRestaurants} />
      <div
        className="card-container"
        style={{
          paddingLeft: "20px",
          paddingRight: "15px",
          background: "#f8fafc",
        }}
      >
        {listOfRestaurants.map((restaurant) => (
          <Card key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <Card resData={resObj[0]} />
        <Card resData={resObj[1]} />
        <Card resData={resObj[2]} />
        <Card resData={resObj[3]} />
        <Card resData={resObj[4]} />
        <Card resData={resObj[5]} />
        <Card resData={resObj[6]} />
        <Card resData={resObj[7]} />
        <Card resData={resObj[8]} />
        <Card resData={resObj[9]} />
        <Card resData={resObj[10]} /> */}
      </div>
      <Footer />
      <h1
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginTop: "-5%",
          marginBottom: "5%",
        }}
      >
        contact us
      </h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Final />);
