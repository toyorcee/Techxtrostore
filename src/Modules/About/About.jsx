import React from "react";
import aboutimg from "../../Assets/ecommerce-10.webp";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-3xl mb-2 text-gray-900 font-weight: 800">
              ABOUT US
            </h1>
            <div className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium veniam suscipit adipisci voluptatibus nemo! Saepe amet
              esse, est dignissimos officiis perspiciatis nemo odio quos porro
              unde, enim recusandae in, et adipisci eius dolore! Quasi officiis
              impedit animi sapiente atque ex inventore eos, quia unde
              laboriosam necessitatibus quo facere! Doloribus cumque aliquid
              voluptatibus, corrupti repellat voluptate.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              2.7K
            </h2>
            <p className="leading-relaxed text-[#3559E0]">Users</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              1.8K
            </h2>
            <p className="leading-relaxed text-[#3559E0]">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              450k
            </h2>
            <p className="leading-relaxed text-[#3559E0]">Purchases</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              1200
            </h2>
            <p className="leading-relaxed text-[#3559E0]">Products</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src={aboutimg}
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
