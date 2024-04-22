import Counter from "@/components/Counter/Counter";
import React from "react";
const HomePage = () => {
  // throw new Error();
  return (
    <div>
      <h1>This is My Home Page</h1>
      <Counter></Counter>
      <button className="btn btn-accent">Accent</button>
    </div>
  );
};

export default HomePage;
