import React from "react";

const Card = (props: any) => {
  return (
    <>
      <div className="pt-10">
        <div className="mx-auto md:w-4/5 lg:w-3/5 rounded-lg shadow-2xl w-11/12 bg-gray-300 p-4">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Card;
