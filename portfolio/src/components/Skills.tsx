import React from 'react';
const Skills: React.FC = () => {
    const skills = {
        'Programming Languages': [
          { name: 'Python', image: require('./images/python.png') },
          { name: 'Java', image: require('./images/java.png') },
          { name: 'C', image: require('./images/c.png') },
          { name: 'JavaScript', image: require('./images/javascript.png') },
        ],
        'Frontend Skills': [
          { name: 'TypeScript', image: require('./images/typescript.png') },
          { name: 'React.js', image: require('./images/react.png') },
          { name: 'Tailwind CSS', image: require('./images/tailwindcss.png') },
          { name: 'JavaFX', image: require('./images/javafx.png') },
          { name: 'React Native', image: require('./images/react native.png') },
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
    <section id='Skills' className="p-10">
        <h2 className="text-4xl mb-10">Skills</h2>
        {Object.entries(skills).map(([category, skills]) => (
        <div key={category} className="mb-5">
            <h3 className="text-2xl mb-3">{category}</h3>
            <div className="flex flex-wrap">
            {skills.map((skill, index) => (
                <div key={index} className="m-2 w-96 h-48 rounded-lg p-4 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center space-x-2">
                <img src={skill.image} alt={skill.name} className="w-32 h-32 mb-2" />
                <span className="text-xl font-semibold text-center">{skill.name}</span>
                </div>
            ))}
            </div>
        </div>
        ))}
    </section>
    );
};

export default Skills;
