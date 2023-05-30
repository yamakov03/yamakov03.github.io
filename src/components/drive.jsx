import React from "react";

function drive() {
    return (
        <div className="flex justify-center items-center basis-full">
            <div
                className="group 
  relative 
  block 
  min-[1024px]:w-[65%]
  sm:w-[70%]
  md:h-[350px]
  sm:h-[375px]
  sm:mt-10
  min-[1024px]:mt-[100px]    
  "
            >
                <span className="absolute inset-0 bg-black rounded-xl"></span>
                <div
                    className=" flex h-full 
  transform items-end 
  bg-accent-color
  rounded-xl  transition hover:shadow-none
  group-hover:-translate-x-2 group-hover:-translate-y-2 
  border-2 border-black
  "
                >
                    <div className="transition-opacity group-hover:absolute group-hover:opacity-0 p-8">
                        <p className="text-5xl">
                            <BiWorld />
                        </p>

                        <h2 className="mt-4 text-4xl font-medium ">What drives me</h2>
                    </div>

                    <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 p-8 ">
                        <h3 className="mt-4 text-2xl font-medium">Make an Impact</h3>

                        <p className="mt-4 text-lg ">
                            This world is filled with complex problems. I am motivated to be a{" "}
                            <span className="font-bold"> force for good</span>. I'm excited to
                            keep learning and create positive change, day by day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default drive;
