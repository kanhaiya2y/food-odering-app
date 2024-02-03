import Image from "next/image";

import React from "react";
import Right from "../Icons/Right";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl semi-bold">
          {" "}
          Everything <br/>is better <br/>with a <span className="text-red-600 font-bold">Pizza</span>
        </h1>
        <p className="my-4 text-sm">
          Experience a taste revolution with our pizzas - each bite is a flavor
          explosion that turns your taste buds into a party. Forget ordinary,
          indulge in the extraordinary, where every slice is a knockout punch to
          your cravings. Life's too short for boring pizza!
        </p>

        <div className=" flex gap-2 text-sm">
          <button className="rounded-full px-4 py-2 bg-red-600 flex gap-2 item-center">
            Oder now
            <Right/>
          </button>
    
          <button className="flex py-2">Learn More<Right/>
          </button>
        </div>
      </div>

      <div className=" relative">
        <Image src={"/pizza.png"} layout={"fill"} objectFit={"contain"} />
      </div>
    </section>
  );
};

export default Hero;
