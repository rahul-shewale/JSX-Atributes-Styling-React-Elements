import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img alt="random" src="https://picsum.photos/seed/picsum/200/200" />

      <img
        className="food-img"
        alt="roll"
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />

      <img
        className="food-img"
        alt="burger"
        src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />

      <img
        className="food-img"
        alt="pizza"
        src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </div>
  </div>,
  document.getElementById("root")
);
