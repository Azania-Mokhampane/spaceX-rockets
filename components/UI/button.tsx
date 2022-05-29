import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <>
      <div className="pt-5">
        <div className="flex items-center justify-center">
          <Link href="/">
            <button className="bg-black text-white p-2 rounded-lg shadow-xl hover:bg-white hover:text-black hover:outline-none hover:ring hover:ring-black">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Button;
