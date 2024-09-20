import React from 'react';
import myPhoto from '../assets/my-photo.jpg'; // Import the image from the assets folder
import { FaLinkedin, FaGithub, FaStackOverflow, FaMedium, FaPhoneAlt, FaAddressBook, FaResearchgate  } from 'react-icons/fa';
import { MdEmail } from "react-icons/md"; // Import social media icons

const About = () => {
    const skills = {
        "Programming Languages & Core Technical Skills": "Java, TypeScript, JavaScript, Python, C#, SQL, HTML & CSS",
        "Frameworks and Libraries": "Angular, SpringBoot, Spring, JPA, Infinispan, PrimeNG, Node.js",
        "DBMS": "Oracle, PostgreSQL, MySQL, InfluxDB, MongoDB, SQLite",
        "Testing": "Mockito, PowerMock, Karma, Swagger",
        "Tools": "JIRA, GIT, Maven, NPM, Docker, Jenkins, WinSCP, Putty, Postman, IntelliJ IDEA/WebStorm, Visual Studio Code",
        "Cloud Platforms": "AWS (IAM, EC2, S3)",
        "Miscellaneous": "Apache Kafka, Drools, Node-RED server, Crystal Reports, Postman",
        "Concepts": "OOP, CI/CD, ACID, SOLID & Agile",
        "Soft Skills": "Leadership Skills, Strong team player, Time Management, Demonstration Skills"
    };

    return (
        <section id="about" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800">
            {/* Image and Description Section */}
            <div className="flex flex-col md:flex-row items-center md:w-full">
                <div className="flex justify-center mb-6 md:w-1/3 md:mb-0">
                    <img
                        src={myPhoto}
                        alt="Isuru Ranaweera"
                        className="rounded-full w-48 h-48 md:w-64 md:h-64 border-4 border-gray-700 dark:border-gray-400"
                    />
                </div>
                <div className="md:w-2/3 text-center md:text-left flex flex-col">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Hi, I'm Isuru Ranaweera</h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Full-Stack Developer specializing in Java and Angular with over 4+ years of experience in building and
                        deploying web applications. Passionate about creating efficient, scalable, and user-friendly solutions.
                    </p>

                    {/* Social Media Links */}
                    <div className="mt-4 flex space-x-4 justify-center md:justify-start mb-4">
                        <a href="https://www.linkedin.com/in/i-d-r/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/Isuru40" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-black">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://stackoverflow.com/users/7469625/isuru-dhananjaya-ranaweera" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-orange-500">
                            <FaStackOverflow size={24} />
                        </a>
                        <a href="https://i-d-r.medium.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
                            <FaMedium size={24} />
                        </a>
                        <a href="https://www.researchgate.net/profile/Isuru-Ranaweera-3" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
                            <FaResearchgate size={24} />
                        </a>
                    </div>

                    {/* Contact Section */}
                    <div className="w-full text-left">
                        <h2 className="text-black dark:text-white text-2xl font-bold mb-4">Contact Me</h2>
                        <p className="text-gray-800 dark:text-gray-200 flex items-center mb-2">
                            <MdEmail className="mr-2" />
                            Email:
                            <a
                                href="mailto:isuru.ranaweera.ir@gmail.com"
                                className="text-blue-500 dark:text-blue-400 hover:underline ml-1"
                            >
                                isuru.ranaweera.ir@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-800 dark:text-gray-200 flex items-center mb-2">
                            <FaPhoneAlt className="mr-2" />
                            Phone: <span className="ml-1">+61 402 821 296</span>
                        </p>
                        <p className="text-gray-800 dark:text-gray-200 flex items-center mb-2">
                            <FaAddressBook className="mr-2" />
                            Address: <span className="ml-1">Unit 140AD 537-561 West Street, Toowoomba, QLD, 4350</span>
                        </p>

                        <h2 className="text-black dark:text-white text-2xl font-bold mb-4">Resume</h2>
                        <p>
                            <a
                                href="https://drive.google.com/file/d/1rBEVMisIVtLPzSxvX_scje3CLDME9MuG/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-800 font-semibold py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-300 transition"
                            >
                                Download Resume
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="md:w-full mt-8 flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Here's What I do</h1>
                {Object.entries(skills).map(([category, skillSet], index) => (
                    <div key={index} className="mt-4 text-center">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{category}</h2>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{skillSet}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
