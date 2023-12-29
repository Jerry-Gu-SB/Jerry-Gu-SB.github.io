import React from 'react';
const Skills: React.FC = () => {
    const skills = {
        'Programming Languages': [
          { name: 'Python', image: require('./images/python.png') },
          { name: 'Java', image: require('./images/java.png') },
          { name: 'C', image: require('./images/c.png') },
        ],
        'Frontend Skills': [
          { name: 'TypeScript', image: require('./images/typescript.png') },
          { name: 'React.js', image: require('./images/react.png') },
          { name: 'Tailwind CSS', image: require('./images/tailwindcss.png') },
          { name: 'JavaFX', image: require('./images/javafx.png') },
        ],
        'Backend Skills': [
          { name: 'SQLite', image: require('./images/sqlite.png') },
          { name: 'Apollo GraphQL', image: require('./images/apollo.png') },
          { name: 'Hasura', image: require('./images/hasura.png') },
          { name: 'Java Database Connectivity', image: require('./images/jdbc.png') },
          { name: 'Hibernate', image: require('./images/hibernate.png') },
        ],
        'Misc': [
          { name: 'JUnit Testing', image: require('./images/junit.png') },
          { name: 'Mockito', image: require('./images/mockito.png') },
          { name: 'Git', image: require('./images/git.png') },
          { name: 'Scrum', image: require('./images/scrum.png') },
          { name: 'APIs', image: require('./images/apis.png') },
        ]
      };
      
      

  return (
    <section className="p-10">
      <h2 className="text-4xl mb-10">Key Skills</h2>
      {Object.entries(skills).map(([category, skills]) => (
        <div key={category} className="mb-5">
          <h3 className="text-2xl mb-3">{category}</h3>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <div key={index} className="m-2 bg-blue-500 text-white rounded-lg px-3 py-1 text-sm font-semibold flex items-center space-x-2">
                <img src={skill.image} alt={skill.name} className="w-6 h-6" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
