import React, { useContext } from "react";
import { UserContext } from "../../UseContext/UseContext";

const Home = () => {
  const { homeValue } = useContext(UserContext);
  console.log(homeValue);
  return (
    <div>
      <div className="bg-info">
        <h4 className="text-center">Notice here</h4>
      </div>
      Home
    </div>
  );
};

export default Home;
