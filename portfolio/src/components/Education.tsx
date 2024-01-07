import React from 'react';

const Education: React.FC = () => {
  return (
    <div id='Education' className="flex flex-col m-20">
      <h2 className="text-4xl mb-10">Education</h2>
      <div className="flex flex-row w-full">
        <div className="flex flex-row w-1/2">
          <img src={require("./images/uva.png")} alt="University of Virginia" className="ml-5 mr-2 w-60 h-60" />
          <div className="text-left text-3xl">
            <h2 className="text-4xl font-bold">University of Virginia</h2>
            <h1 className="text-2xl">Bachelor of Science in Computer Science</h1>
            <ul className="list-disc list-inside">
              <li className="text-xl">Studied computer science in the School of Engineering and Applied Sciences</li>
              <li className="text-xl">Working towards a double major in philosophy</li>
              <li className="text-xl">Currently holding a 3.82 GPA</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row w-1/2">
          <img src={require("./images/snu.png")} alt="Seoul National University" className="ml-5 mr-2 w-60 h-60" />
          <div className="text-left text-3xl">
            <h2 className="text-4xl font-bold">Seoul National University</h2>
            <h1 className="text-2xl">Study Abroad Spring 2024</h1>
            <ul className="list-disc list-inside">
              <li className="text-xl">Semester study in the Department of Computer Science and Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
