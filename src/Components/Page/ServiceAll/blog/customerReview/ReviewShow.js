import React, { useEffect, useState } from "react";
import Show from "./Show";

const ReviewShow = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://laptop-parts-sarver.vercel.app/blogReview")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data.map((d) => (
        <Show d={d} key={d._id}></Show>
      ))}
    </div>
  );
};

export default ReviewShow;
