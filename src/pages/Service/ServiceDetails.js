import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import ReviewsRow from "../Review/ReviewsRow";

const ServiceDetails = () => {
  const { _id, name, price, ratings, img, description } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch(`https://foodota-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const ratings = form.ratings.value;
    const reviewerImg = form.reviewerImg.files[0];
    console.log(name, email, message, ratings, reviewerImg);

    const review = {
      name,
      email,
      message,
      ratings,
      reviewerImg,
    };
    fetch("https://foodota-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review added successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl text-secondary font-bold">Food Details</h1>
      </div>

      <div className="card my-10 w-full bg-base-200 shadow-xl">
        <figure>
          <img src={img} alt="ServiceDetails" />
        </figure>
        <div className="card-body">
          <div className="justify-start">
            <h2 className="card-title text-3xl">{name}</h2>
            <div className="badge badge-secondary my-5 p-3 text-white">
              Tk. {price}
            </div>
          </div>
          <p>{description}</p>
          <div className="card-actions flex justify-between">
            <Link to="/">
              <button className="btn btn-secondary">Back to Home</button>
            </Link>
            <div className="rating rating-md mt-2">
              {Array.from({ length: ratings }).map((_, idx) => (
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="text-center">
          <h1 className="text-5xl text-secondary font-bold">Add a Reviews</h1>
        </div>
        <div className="flex justify-center">
          <form
            onSubmit={handleAddReview}
            className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue={user?.email}
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-info"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="Rating"
                  min={1}
                  max={5}
                  defaultValue="5"
                  name="ratings"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Reviewer Photo</span>
                </label>
                <input
                  type="file"
                  name="reviewerImg"
                  className="file-input file-input-bordered file-input-info w-full"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">
                  Submit Your Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="my-10">
        <div className="text-center">
          <h1 className="text-5xl mb-5 text-secondary font-bold">
            Service Reviews
          </h1>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table table-fixed">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {allReviews.map((review) => (
                <ReviewsRow key={review._id} review={review}></ReviewsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
