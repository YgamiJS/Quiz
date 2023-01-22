import React from "react";

interface IWrapper {
  children: React.ReactNode;
}

const Wrapper = ({ children }: IWrapper) => {
  return (
    <div className="max-w-screen-xl m-auto px-[15px] flex flex-col justify-center items-center h-screen">
      {children}
    </div>
  );
};

export default Wrapper;
