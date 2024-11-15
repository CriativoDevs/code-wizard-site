import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 max-sm:mt-80">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a Full Stack Developer with expertise in designing, maintaining,
          and implementing new features for APIs and various projects. Through
          my personal project, Criativo Devs, I manage all the applications and
          systems I develop during my studies and freelance work. Criativo Devs
          also serves as the launch platform for my upcoming mobile application.
        </p>
        <br />
        <p className="text-xl mt-8">
          With a strong background in Python, Django, Django Rest Framework,
          JavaScript, ReactJS, React Native Expo CLI, SQL, MySQL, PostgreSQL,
          Git, and Docker, I am well-versed in creating tailored solutions that
          drive results. Currently, I am learning AWS to stay ahead of market
          trends and am proficient in professional English. My commitment to
          clean, maintainable code and a solution- driven mindset make me
          adaptable and ready to tackle complex challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
