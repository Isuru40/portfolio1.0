import React from 'react';
import {IoIosLink} from "react-icons/io";
import {FaGithub} from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Web Site',
            description: 'Portfolio Web Application Sample for my self',
            link: 'https://github.com/Isuru40/portfolio1.0',
            technologies: 'React | Redux | Github Actions | Firebase Hosting'
        },
        {
            title: 'Cloud Infrastructure Monitoring System - POC @ Virtusa',
            description: 'Developed a web based dashboard to monitor internal and cloud infrastructure information which users allows to get information of all servers , hosts , routers.',
            link: '',
            technologies: 'Java 8 | Spring boot | Hibernate | Rest API | Apache Kafka | MySql | KeyClock'
        },
        {
            title: 'Live Temperature Display Board',
            description: 'This is simple real time line chart generator demo with rabbitmq',
            link: 'https://github.com/Isuru40/liveTemperature-RabbitMQ-SpringBoot',
            technologies: 'Java 8 | Spring boot | RabbitMQ'
        },
        {
            title: 'Pulse 2.0 @ Virtusa',
            description: 'Severs stats (Servers CPU, Memory, Disk and etc.)showing application. Use various data visualization ways ',
            link: '',
            technologies: 'Angular 8 | Java 8 | Spring boot | Apache Kafka | Shell Script'
        },
        {
            title: 'Azure-Function-Example-humidity-status-generator',
            description: 'This the Azure Function example of the real time dashboard related to article series on Medium.',
            link: 'https://github.com/Isuru40/Azure-Function-Example-humidity-status-generator',
            technologies: 'Azure Functions | Apache Kafka | Angular 8 | Java 8 | Spring boot'
        },
        {
            title: 'NTP Admin Terminal @ Directfn',
            description: 'a Multi-Tenant Cloud Native client-server application using Micro \n' +
                'service architecture aimed at supporting and automating the Back-Office \n' +
                'workflows.',
            link: '',
            technologies: 'Angular 12 | Java 17 | Web Sockets | Dropwizard | Spring boot'
        },
        {
            title: 'ClassEka.lk',
            description: 'Classeka supports online quizes, chats, message forums and video conferencing within the platform itself, providing a comprehensive learning experience!',
            link: 'https://classeka.lk/',
            technologies: 'React | Redux | Firebase FileStore | Firebase Authentication | Firebase Cloud Functions'
        }
    ];
    const publications = [
        {
            title: 'Building Automation System',
            description: 'Optimizing energy utilization through distributed network monitoring.',
            link: 'https://www.researchgate.net/publication/347442708'
        }
    ];

    return (
        <section id="projects" className="bg-white dark:bg-gray-800 p-4">
            <h2 className="text-black dark:text-white text-2xl font-bold mb-4">Top Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted grid layout */}
                {projects.map((project, index) => (
                    <div key={index} className="p-4 border rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
                        <h3 className="text-lg text-gray-800 dark:text-gray-200">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                        <h4 className="text-gray-800 dark:text-gray-200">{project.technologies}</h4>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 dark:text-blue-400 mt-2">
                                <FaGithub className="mr-2" /> Project Link
                            </a>
                        )}
                    </div>
                ))}
            </div>
            <div>&nbsp;</div>

            <h2 className="text-black dark:text-white text-2xl font-bold mb-4">Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted grid layout */}
                {publications.map((project, index) => (
                    <div key={index} className="p-4 border rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
                        <h3 className="text-lg text-gray-800 dark:text-gray-200">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 dark:text-blue-400 mt-2">
                                <IoIosLink className="mr-2" /> Visit Publication
                            </a>
                        )}

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
