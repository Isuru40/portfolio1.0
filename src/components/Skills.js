import React from 'react';

const Skills = () => {
    const skills = ['Java', 'Angular', 'SpringBoot', 'Node.js', 'Docker', 'AWS', 'OracleDB', 'SQL', 'JavaScript'];

    return (
        <section id="skills" className="p-6 bg-white">
            <h2 className="text-2xl font-bold text-center mb-4">Technical Skills</h2>
            <ul className="flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                    <li key={index} className="bg-gray-800 text-white px-4 py-2 rounded-full m-2">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
