import React from "react";

const Process = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold">How Foodota Works</h1>
        <p className="py-6">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
          tellus in metus vulputate eu scelerisque felis.
        </p>
      </div>
      <div className="flex w-full">
        <div className="grid w-1/3 flex-grow card rounded-box place-items-center">
          <h3 className="text-3xl font-bold">Select Location</h3>
          <p className="text-center">
            Non enim praesent elementum facilisis leo vel fringilla. Lectus
            proin nibh nisl condimentum id. Quis varius quam quisque id diam
            vel.
          </p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid w-1/3 flex-grow card rounded-box place-items-center">
          <h3 className="text-3xl font-bold">Select menu</h3>
          <p className="text-center">
            Non enim praesent elementum facilisis leo vel fringilla. Lectus
            proin nibh nisl condimentum id. Quis varius quam quisque id diam
            vel.
          </p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid w-1/3 flex-grow card rounded-box place-items-center">
          <h3 className="text-3xl font-bold">Wait for delivery</h3>
          <p className="text-center">
            Non enim praesent elementum facilisis leo vel fringilla. Lectus
            proin nibh nisl condimentum id. Quis varius quam quisque id diam
            vel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
