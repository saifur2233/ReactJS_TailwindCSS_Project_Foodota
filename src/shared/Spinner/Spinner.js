import React, { useEffect } from "react";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 10000);
  }, []);

  return (
    <div className="sweet-loading">
      <ClipLoader
        color="#36d7b7"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
