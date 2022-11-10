import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpImg from "../../assets/images/auth/signup.png";
import { AuthContext } from "../../context/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    if (password.length < 6) {
      setError(`Your Password must be 6 character`);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        // Generate jwt token
        fetch("https://foodota-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // jwt token store in local storage
            localStorage.setItem("foodota", data.token);
            form.reset();
            navigate("/");
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero py-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={SignUpImg} alt="Signup" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-secondary font-bold text-center py-5">
            Registration!
          </h1>
          <form onSubmit={handleSignup} className="card-body">
            <p className="text-center text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
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
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
            </div>
            <div className="divider">OR</div>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-info">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
