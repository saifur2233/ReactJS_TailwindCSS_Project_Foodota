import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { name, price, ratings, img, description } = useLoaderData();

  return (
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
  );
};

export default ServiceDetails;
