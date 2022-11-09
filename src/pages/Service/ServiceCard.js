import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, name, price, ratings, img, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} style={{ objectFit: "cover" }} alt="ServiceImg" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-accent">Tk. {price}</div>
        </div>
        <p>
          {description.length < 100
            ? `${description}`
            : `${description.substring(0, 99)}+'...`}
        </p>
        <div className="card-actions flex justify-between">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-secondary">View Details</button>
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

export default ServiceCard;
