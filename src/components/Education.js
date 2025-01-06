import React from 'react';
import { IoIosLink } from 'react-icons/io'; // Import the IoIosLink icon

function Education() {
    const educationData = [
        {
            school: 'University of Kelaniya',
            degree: 'B.Sc.(Hons.) in Software Engineering',
            duration: 'March 2017 - Feb. 2021',
            description: 'Developed several applications as university projects',
            additional: 'Major: Net Centric Applications, Mobile Computing, Data Science',
            link: 'https://www.kln.ac.lk/' // Add the specific link here
        },
        {
            school: 'ESOFT Metro Campus',
            degree: 'Diploma In Software Engineering',
            duration: '2020 - 2022',
            description: 'Specialized in C#, .NET, ASP .NET',
            additional: 'Developed several applications ',
            link: 'https://www.esoft.lk/' // Add the specific link here
        },
    ];

    const certificationData = [
        {
            school: 'LinkedIn',
            degree: 'Redis Essential Training',
            duration: 'Issued Dec 2024',
            description: 'Taught by Fernando Doglio',
            additional: 'Redis',
            link: 'https://www.linkedin.com/learning/certificates/9ae83bc941eba29f141ee998523819436602fbca260e30ae4275aff4a2db1efc' // Add the specific link here
        },
        {
            school: 'LinkedIn',
            degree: 'GraphQL Essential Training',
            duration: 'Issued Nov 2024',
            description: 'Taught by Emmanuel Henri',
            additional: 'GraphQL',
            link: 'https://www.linkedin.com/learning/certificates/57010391506eb6d6dc700ded95e2afd45262ecd1d75d6e13104893ccb9986f3b?trk=share_certificate' // Add the specific link here
        },
        {
            school: 'LinkedIn',
            degree: 'Learning Next.js',
            duration: 'Issued Nov 2024',
            description: 'Taught by Sandy Ludosky',
            additional: 'Web Development\n' +
                'Front-End Development\n' +
                'Next.js\n' +
                'React.js',
            link: 'https://www.linkedin.com/learning/certificates/8a6b92eb950963d78e718e2bd69ae9033eeb6517292c7f219b9fa7689af4feb4?trk=share_certificate' // Add the specific link here
        },
        {
            school: 'Udemy',
            degree: 'The Complete Android & Java Developer',
            duration: 'Issued May 2020',
            description: 'Taught by Paulo Dichone',
            additional: 'Build 21 Apps',
            link: 'https://www.udemy.com/certificate/UC-20420120-8551-47b7-a383-cdd581e4013a' // Add the specific link here
        },
        {
            school: 'Coursera',
            degree: 'Sequences, Time Series and Prediction',
            duration: 'Issued Feb 2021',
            description: 'Course By DeepLearning.Ai',
            additional: 'Machine Learning, Applied Machine Learning, Artificial Neural Networks ',
            link: 'https://coursera.org/share/c6e43aa0cf3f524c748325f81a4033d0' // Add the specific link here
        },
        {
            school: 'Coursera',
            degree: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
            duration: 'Issued Feb 2021',
            description: 'Course By Google Cloud',
            additional: 'Cloud Computing, Google Cloud Platform',
            link: 'https://coursera.org/share/5eee534e4d0bb24b2ba18e3a6b691a46' // Add the specific link here
        },
        {
            school: 'Coursera',
            degree: 'Big Data Emerging Technologies',
            duration: 'Issued May 2020',
            description: 'Course By Yonsei University',
            additional: 'Big Data, Data Analysis Software, Data Management, Applied Machine Learning ',
            link: 'https://coursera.org/share/c6e43aa0cf3f524c748325f81a4033d0' // Add the specific link here
        },
    ];

    return (
        <section id="education" className="bg-white dark:bg-gray-800 p-4">
            <h2 className="text-black dark:text-white text-3xl font-bold mb-4">Education</h2>
            <div className="education-list">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-item mb-6 p-4 border rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{edu.school}</h3>
                        <p className="text-lg italic text-gray-600 dark:text-gray-400">{edu.degree}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.duration}</p>
                        <p className="text-base mt-2 text-gray-600 dark:text-gray-300">{edu.description}</p>
                        <p className="text-base mt-2 text-gray-600 dark:text-gray-300">{edu.additional}</p>
                        {edu.link && (
                            <a href={edu.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 dark:text-blue-400 mt-2">
                                <IoIosLink className="mr-2" /> Visit Website
                            </a>
                        )}
                    </div>
                ))}
            </div>
            <h2 className="text-black dark:text-white text-3xl font-bold mb-4">Certifications</h2>
            <div className="education-list">
                {certificationData.map((edu, index) => (
                    <div key={index} className="education-item mb-6 p-4 border rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{edu.school}</h3>
                        <p className="text-lg italic text-gray-600 dark:text-gray-400">{edu.degree}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.duration}</p>
                        <p className="text-base mt-2 text-gray-600 dark:text-gray-300">{edu.description}</p>
                        <p className="text-base mt-2 text-gray-600 dark:text-gray-300">{edu.additional}</p>
                        {edu.link && (
                            <a href={edu.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 dark:text-blue-400 mt-2">
                                <IoIosLink className="mr-2" /> Visit Certificate
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
