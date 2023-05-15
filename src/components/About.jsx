import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 pt-8 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quaerat. Distinctio quam laudantium recusandae numquam eum!
          Recusandae, facilis repellendus error harum temporibus, eligendi
          ratione numquam amet quasi nemo molestiae ipsam quos voluptas aliquam
          dolor accusamus laudantium doloribus repudiandae pariatur. Blanditiis
          vel eos ut beatae deserunt impedit adipisci numquam dolorum natus!
        </p>
        <br />
        <p className="text-xl mt-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          corrupti velit tempora nulla repellendus? Reprehenderit, ut quidem
          repudiandae fuga impedit eius dolor tempore quam, temporibus provident
          est molestiae fugit nisi eos praesentium distinctio! Eaque eveniet
          sapiente ullam quaerat, similique vel cupiditate tenetur
          necessitatibus earum exercitationem quis, excepturi, facilis fugiat
          inventore.
        </p>
      </div>
    </div>
  );
};

export default About;
