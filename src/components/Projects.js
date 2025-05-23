import React from 'react';
import { IoIosLink } from "react-icons/io";
import { FaGithub ,FaMedium } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: 'Cabs and Tours Web Site',
            description: 'Cabs and Tours provider info site',
            link: 'https://github.com/Isuru40/taxi-app',
            technologies: 'React | Vite | Vercel',
            mediumLink: '', // No Medium link for this project
            prodLink: 'https://laksiritourskandy.com/',
        },
        {
            title: 'Portfolio Web Site',
            description: 'Portfolio Web Application Sample for my self',
            link: 'https://github.com/Isuru40/portfolio1.0',
            technologies: 'React | Redux | Github Actions | Firebase Hosting',
            mediumLink: '', // No Medium link for this project
            prodLink: '',
        },
        {
            title: 'NTP Admin Terminal @ Directfn',
            description: 'a Multi-Tenant Cloud Native client-server application using Micro service architecture aimed at supporting and automating the Back-Office workflows.',
            link: '',
            technologies: 'Angular 14 | Java 17 | Web Sockets | Dropwizard | Spring boot | Spring | JPA | Infinispan | PrimeNG',
            mediumLink: '', // No Medium link for this project
            prodLink: '',
        },
        {
            title: 'Live Temperature Display Board',
            description: 'This is simple real time line chart generator demo with rabbitmq',
            link: 'https://github.com/Isuru40/liveTemperature-RabbitMQ-SpringBoot',
            technologies: 'Java 8 | Spring boot | RabbitMQ',
            mediumLink: 'https://i-d-r.medium.com/rabbitmq-powered-live-temperature-dashboard-using-java-2251dfb4d9af',
            prodLink: ''
        },
        {
            title: 'Pulse 2.0 @ Virtusa',
            description: 'Severs stats (Servers CPU, Memory, Disk and etc.)showing application. Use various data visualization ways ',
            link: '',
            technologies: 'Angular 8 | Java 8 | Spring boot | Apache Kafka | Shell Script',
            mediumLink: '', // No Medium link for this project
            prodLink: '',
        },
        {
            title: 'Azure-Function-Example-humidity-status-generator',
            description: 'This the Azure Function example of the real time dashboard related to article series on Medium.',
            link: 'https://github.com/Isuru40/Azure-Function-Example-humidity-status-generator',
            technologies: 'Azure Functions | Apache Kafka | Angular 8 | Java 8 | Spring boot',
            mediumLink: 'https://i-d-r.medium.com/real-time-dashboard-with-kafka-spring-boot-angular-azure-18b11f933170', // Example Medium link
            prodLink: ''
        },
        {
            title: 'Cloud Infrastructure Monitoring System - POC @ Virtusa',
            description: 'Developed a web based dashboard to monitor internal and cloud infrastructure information which users allows to get information of all servers , hosts , routers.',
            link: '',
            technologies: 'Java 8 | Spring boot | Hibernate | Rest API | Apache Kafka | MySql | KeyClock',
            mediumLink: '', // No Medium link for this project
            prodLink: ''
        },
        {
            title: 'ClassEka.lk',
            description: 'Classeka supports online quizzes, chats, message forums and video conferencing within the platform itself, providing a comprehensive learning experience!',
            link: 'https://classeka.lk/',
            technologies: 'React | Redux | Firebase FileStore | Firebase Authentication | Firebase Cloud Functions',
            mediumLink: '', // No Medium link for this project
            prodLink: ''
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 border rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
                        <h3 className="text-lg text-gray-800 dark:text-gray-200">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                        <h4 className="text-gray-800 dark:text-gray-200">{project.technologies}</h4>
                        <div className="flex items-center mt-2">
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 dark:text-blue-400 mr-4">
                                    <FaGithub className="mr-2" /> Project Link
                                </a>
                            )}
                            {project.mediumLink && (
                                <a href={project.mediumLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 dark:text-blue-400">
                                    <FaMedium className="mr-2" /> Medium Article
                                </a>
                            )}
                            {project.prodLink && (
                                <a href={project.prodLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 dark:text-blue-400">
                                    <IoIosLink className="mr-2" /> Visit Site
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div>&nbsp;</div>

            <h2 className="text-black dark:text-white text-2xl font-bold mb-4">Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {publications.map((publication, index) => (
                    <div key={index} className="p-4 border rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
                        <h3 className="text-lg text-gray-800 dark:text-gray-200">{publication.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{publication.description}</p>
                        {publication.link && (
                            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 dark:text-blue-400 mt-2">
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
