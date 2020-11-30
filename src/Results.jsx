import React from "react";

const Results = (props) => {
  console.log(props.keyword);
  const img = `https://source.unsplash.com/400x300?${props.keyword}`;

  return <img src={img} alt="Loading...." />;
};

export default Results;
