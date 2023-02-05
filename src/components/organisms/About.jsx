import React from "react";
import Section from "../atoms/Section";
import Heading2 from "../atoms/Heading2";
import SectionHeading from "../atoms/SectionHeading";
import TextRegular from "../atoms/TextRegular";

const About = () => {
  return (
    <Section center>
      <div className="relative grid grid-cols-2 w-3/4 max-w-[1400px]">
        <div className="mx-20 w-[500px]">
          <div className="absolute -left-56 top-1/2 -translate-y-1/2 -rotate-90 ">
            <SectionHeading>ABOUT</SectionHeading>
          </div>
          <Heading2>I am</Heading2>
          <TextRegular>
            a junior full stack developer with some work experice in front end.
            I have a huge passion to learn and create great and intuitive
            applications. <br />
            <br />
            When I'm not programming I enjoy painting and going on motorcycle
            trips, I'm already planning my next one!
            <br />
            <br /> These are the technologies I am currently working with:
          </TextRegular>
          <ul className="grid grid-cols-2 ml-8 text-white font-light">
            <li className="mt-3">React</li>
            <li className="mt-3">Next.js</li>
            <li className="mt-3">Node.js</li>
            <li className="mt-3">Express</li>
            <li className="mt-3">PostgreSQL</li>
            <li className="mt-3">GraphQL</li>
          </ul>
        </div>

        <div></div>
      </div>
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen ">
        <div
          className="absolute top-0 left-0 w-full h-full bg-primary-900 opacity-60 z-30"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(6, 11, 19, 0) 73.51%, rgba(0, 1, 1, 0.82) 89.24%, #000000 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-20 rotate-180"
          style={{
            backgroundImage:
              "linear-gradient(179.01deg, rgba(70, 162, 214, 0) 7.82%, rgba(11, 32, 39, 0.69) 71.4%, rgba(3, 10, 12, 0.903822) 84.24%, rgba(0, 0, 0, 0.97) 94.22%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(6, 11, 19, 0) 73.51%, rgba(0, 1, 1, 0.82) 89.24%, #000000 100%)",
          }}
        />

        <div
          className="absolute top-0 left-0 w-screen h-screen mix-blend-hard-light z-10"
          style={{
            backgroundImage:
              "linear-gradient(256.3deg, rgba(70, 162, 214, 0) 10%, rgba(37, 112, 136, 0.78) 35.99%, #0B2027 66.53%, #000000 91.23%)",
          }}
        />

        <div className="absolute top-5 scale-110 right-[5%] flex justify-center items-center w-screen h-screen overflow-hidden">
          <img src="/IMG_8830.jpg" alt="mountains" className="" />
        </div>
      </div>
    </Section>
  );
};

export default About;
