import React from "react";

const NewsLater = () => {
  return (
    <div className="my-4 space-y-1 mx-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center">
        {" "}
        <h1>Want tips & tricks to optimize your flow ?</h1>
        <h1 className="text-center text-gray-400">
          Sign up for our newslater and stay upto date.
        </h1>
      </div>
      <div>
        {" "}
        <div className="flex flex-col md:flex-row space-y-2 items-center  mt-1">
          <input
            placeholder="Enter your email.."
            className=" bg-white rounded-md w-96 mx-1 h-8 mt-2"
          />
          <button className="bg-orange-700 rounded-lg w-28 mx-40 md:mx-0 px-4 py-2">
            Notify Me
          </button>
        </div>
        <p className="my-2 text-center">
          We Care about the protection of your data. Read our{" "}<br />
          <span className="text-orange-700 underline">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default NewsLater;
