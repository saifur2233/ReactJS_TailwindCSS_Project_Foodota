import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loginimg from "../../assets/images/auth/login.png";
import { AuthContext } from "../../context/UserContext";
import PacmanLoader from "react-spinners/PacmanLoader";
import Spinner from "../../shared/Spinner/Spinner";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
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
            navigate(from, { replace: true });
          });
      })
      .catch(() => {
        setError("Eamil and Password not match!...");
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="hero py-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={Loginimg} alt="Login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-secondary font-bold text-center py-5">
            Login now!
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <p className="text-center text-red-600">{error}</p>
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
              <button className="btn btn-secondary">Login</button>
            </div>
            <div className="divider">OR</div>
            <p className="text-center">
              Are you new here?{" "}
              <Link to="/signup" className="text-info">
                Signup
              </Link>
            </p>
            <button
              onClick={handleGoogleSignin}
              className="btn btn-outline btn-success"
            >
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
