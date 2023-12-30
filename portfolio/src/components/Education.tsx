import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="flex h-auto">
      <div className="flex flex-col items-center justify-center w-1/2">
        <img src={require("./images/uva.png")} alt="University of Virginia" className="h-1/2" />
        <div className="text-center">
          <h2 className="text-2xl font-bold">University of Virginia</h2>
          <ul className="list-disc list-inside">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            {/* Add more bullet points as needed */}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <img src={require("./images/snu.png")} alt="Seoul National University" className="h-1/2" />
        <div className="text-center">
          <h2 className="text-2xl font-bold">Seoul National University</h2>
          <ul className="list-disc list-inside">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            {/* Add more bullet points as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
