import React, { useState } from "react";
import AddServiceImg from "../../assets/images/service/addservice.png";

const CreateService = () => {
  const [error, setError] = useState(null);

  const handleCreateService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const description = form.description.value;
    const img = "https://i.ibb.co/7VvXfg6/3.jpg";
    console.log(name, category, price, ratings, description, img);

    const serviceObj = {
      name,
      category,
      price,
      ratings,
      description,
      img,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Service added successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-2/3 lg:text-left">
          <img src={AddServiceImg} alt="Login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-secondary font-bold text-center pt-5">
            Add Service!
          </h1>
          <form onSubmit={handleCreateService} className="card-body">
            <p className="text-center text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                placeholder="Service Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Category</span>
              </label>
              <input
                type="text"
                placeholder="Service Category"
                name="category"
                className="input input-bordered"
              />
            </div>
            <div className="flex">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Service Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  min={1}
                  max={5}
                  defaultValue="5"
                  placeholder="Rating"
                  name="ratings"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Service Description"
                name="description"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateService;
