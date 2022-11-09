import React, { useState } from "react";
import AddServiceImg from "../../assets/images/service/addservice.png";

const CreateService = () => {
  const [error, setError] = useState(null);

  const handleCreateService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
  };
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-2/3 lg:text-left">
          <img src={AddServiceImg} alt="Login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-secondary font-bold text-center py-5">
            Add New Service!
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
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Description</span>
              </label>
              <input
                type="text"
                placeholder="Service Description"
                name="description"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Description</span>
              </label>
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered file-input-accent w-full max-w-xs"
              />
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
