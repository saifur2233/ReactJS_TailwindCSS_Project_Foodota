import React, { useEffect, useState } from "react";
import ReviewsRow from "./ReviewsRow";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full">
      <div className="text-center">
        <h1 className="text-5xl mb-5 text-secondary font-bold">All Reviews</h1>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allReviews.map((review) => (
            <ReviewsRow key={review._id} review={review}></ReviewsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
