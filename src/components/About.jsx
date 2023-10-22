import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#2f0a0a] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#5e1414] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#5b1212]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hey there, I am glad that you are here. 
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am an Information Technology graduate with an interest in
                solving problems through the code I write. I am a Java developer,
                and I have been trying my hand at Web Development as well. 
                I have been working with technologies such as ReactJS, ExpressJS, 
                NodeJS and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;