import React from 'react';

const Education: React.FC = () => {
  return (
    <div id='Education' className="flex flex-col m-20">
      <h2 className="text-4xl mb-10">Education</h2>
      <div className="flex flex-row w-full">
        <div className="flex flex-row w-1/2">
          <img src={require("./images/uva.png")} alt="University of Virginia" className="ml-5 mr-2 w-60 h-60" />
          <div className="text-left">
            <h2 className="text-xl sm:text-md md:text-xl lg:text-2xl xl:text-4xl font-bold">University of Virginia</h2>
            <h1 className="text-sm sm:text-sm md:text-md lg:text-xl xl:text-2xl font-bold">Bachelor of Science in Computer Science</h1>
            <h1 className="text-sm sm:text-sm md:text-md lg:text-xl xl:text-2xl font-bold">Bachelor of Arts in Philosophy</h1>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              <li>Expected graduation in May 2025</li>
              <li>Currently holding a 3.82 GPA</li>
              <li>President of the StarCraft Club at UVA</li>
              <li>Head of StarCraft 2 division in UVA Esports</li>
              <li>UVA Kendo travel team member</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row w-1/2">
          <img src={require("./images/snu.png")} alt="Seoul National University" className="ml-5 mr-2 w-60 h-60" />
          <div className="text-left text-3xl">
            <h2 className="text-xl sm:text-md md:text-xl lg:text-2xl xl:text-4xl font-bold">Seoul National University</h2>
            <h1 className="text-sm sm:text-sm md:text-md lg:text-xl xl:text-2xl font-bold">Study Abroad Spring 2024</h1>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              <li>Semester study in the Department of Computer Science and Engineering</li>
              <li>UVA International Studies Office videographer correspondent</li>
              <li>Member of the SNU kumdo club</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
