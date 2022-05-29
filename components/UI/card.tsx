import React, { ReactNode } from "react";
import { FC } from "react";

interface ICARD {
  children?: ReactNode;
}

const Card: FC<ICARD> = ({ children }) => {
  return (
    <>
      <div className="pt-10">
        <div className="mx-auto md:w-4/5 lg:w-3/5 rounded-lg shadow-2xl w-11/12 bg-gray-300 p-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
