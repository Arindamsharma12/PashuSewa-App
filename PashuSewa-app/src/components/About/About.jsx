import React from "react";
import cow from "../../images/cow.png";
import cat from '../../images/cat.png'
import Card from "../Card";
function About() {
  return (
    <>
      <div
        className="relative h-[300px] flex justify-center items-center 
                 bg-gradient-to-r from-[#ff4500] to-[#ff6333] 
                 rounded-b-[50px] overflow-hidden"
        style={{
          backgroundImage: `url(${cow})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#ff4500] opacity-80"></div>
        <h1 className="text-white text-4xl font-bold z-10">About Us</h1>
      </div>
      <div className="text-center flex flex-wrap justify-center items-center mt-12 mx-10">
        <h1 className="text-[3rem]">Welcome to Pashu Sewa</h1>
        <div className="flex items-center justify-center mt-12 text-lg">
        <div>
          Founded with love and compassion, <span className="text-orange-500">Pashu Sewa</span> is dedicated to rescuing
          and rehabilitating injured animals of all kinds. Our team of dedicated
          volunteers and animal welfare experts work tirelessly to provide
          emergency care, safe shelter, and a loving environment for rescued
          animals. Over the years, we have built a strong community of
          supporters, adopters, and donors who share our mission to create a
          better world for these voiceless beings. We believe that by working
          together, we can give these helpless creatures a second chance at
          life.
        </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[40%]">
            <img src={cat} alt="" />
          </div>
        <div className="">
          <h1 className="text-[2rem] mb-5">What We Offer:</h1>
          <div className="flex flex-wrap justify-center space-y-6 space-x-5"> 
            <Card title={"Rescue & Rehabilitation:"} content={"We work with local volunteers and animal welfare organizations to rescue injured animals and provide them with essential medical care."}/>
            <Card title={"Adoption Services:"} content={" Browse through heartwarming adoption stories and connect with animals seeking loving families."}/>
            <Card title={"Donation Platform:"} content={"Your donations go directly towards veterinary bills, shelter improvements, and food for rescued animals. Every contribution makes a difference."}/>
            <Card title={"Educational Resources:"} content={"Learn about responsible pet ownership, first-aid tips for animals, and how you can help stray animals in your area."}/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
