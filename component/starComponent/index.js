import React, { useState } from "react";
import { Rating, AirbnbRating } from "react-native-ratings";

const StarComponent = () => {
  const [rating, setRating] = useState(3);

  const ratingCompleted = (rating) => {
    alert(rating)
  };

  return <AirbnbRating count={4} showRating={false} defaultRating={3} size={20} onFinishRating={(rating)=>ratingCompleted(rating)}/>;
};

export default StarComponent;