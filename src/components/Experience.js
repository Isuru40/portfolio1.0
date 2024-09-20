import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'DFN Technology (Sri Lanka/Saudi Arabia)',
            role: 'Senior Software Engineer',
            period: 'May 2023 - Present  (1+ Year)',
            tasks: [
                'Engages in Full-stack development for the Next Generation Trading Platform (NTP),\n' +
                'including the Admin Terminal (Frontend) and the Back Office Server (BOS - Back-\n' +
                'end), with Oracle DB integration to meet system requirements and technical specifications.',
                'Ensures adherence to quality-accredited standards (SaaS Products).',
                'Collaborates closely with stakeholders such as product managers, business analysts, and QA teams to gather requirements, define project scope, and ensure\n' +
                'alignment with organizational objectives.',
                'Entrusted with critical responsibilities as a code reviewer and mentor for new engineers, ensuring high standards of code quality and supporting team skill development.',
                'Developed file processing and reconciliation related to the FIX protocol.',
                'Designs, develops, and maintains high-quality software solutions for internal and\n' +
                'external stakeholders.',
                'Collaborates with cross-functional teams to ensure efficient and effective delivery\n' +
                'of software projects.',
                'Takes ownership of development assignments, ensuring timely and accurate completion.',
                'Contributes to the redevelopment of the core platform using the latest technologies.',
                'Participates in code reviews, testing, and debugging to ensure software quality and reliability.',
                'Continuously improves skills and stays updated with industry trends and advancements.',
                'Provides technical guidance and mentorship to junior developers.',
                'PTTP2 - Saudi Arabian Market Changes Requirement',
                'Implemented across 8+ Brokerages in Saudi Arabia including major banks such\n' +
                'Crédit Agricole Corporate and Investment Bank Subsidiary (Saudi Fransi\n' +
                'Capital) & Morgan Stanley of Saudi Arabia\n',
                'Database related Developments according to system requirements (Procedures, Views, Triggers, Functions, Jobs writing and modification etc.).',
                'NTP Project Go Live - Morgan Stanley Saudi Arabia, Saudi Fransi Capital LLC'

            ]
        },
        {
            company: 'DFN Technology (Sri Lanka/Saudi Arabia)',
            role: 'Software Engineer',
            period: 'May 2021 - May 2023  (2 Year)',
            tasks: [
                'Consistently delivered small features and improvements to enhance system functionality.',
                'Conducted Product Demonstrations for clients and provided guidance to clients on their concerns.',
                'Managed and optimized the data architecture in Oracle Database, encompassing\n' +
                'schema setup, stored procedures, data models, and data mart views for enhanced\n' +
                'data accessibility and performance.',
                'Engaging in critical bug fixing tasks and providing insights to team members.',
                'Conducted client demonstrations and facilitated requirement gathering sessions\n' +
                'to align solutions with client needs and expectations.',
                'Utilizes cloud platforms to enhance the scalability and performance of core systems',
                'Implements best practices in software design, reusability, and maintainability.',
                'NTP Project Go Live - Alkhabeer Capital, Musharaka Capital, Yaqeen Capital',

            ]
        },
        {
            company: 'Virtusa (Sri Lanka)',
            role: 'Software Engineer Internship',
            period: 'June 2019 - June 2020  (1 Year)',
            tasks: [
                'Engaged diverse development tasks encompassing both backend and frontend\n' +
                'development including data visualization widgets designing & developing.',
                'Keycloak integration to existing applications, sign-on with Identity and Access Management.',
                'Azure virtual machines and AWS EC2 instance metrics reading platform designing.',
                'Apache Kafka integrated data handler designing & developing.'
            ]
        }
    ];

    return (
        <section id="experience" className="bg-white dark:bg-gray-800 p-4">
            <h2 className="text-black dark:text-white text-2xl font-bold mb-4">Experience</h2>
            {experiences.map((job, index) => (
                <div key={index} className="mb-6 p-4 border rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
                    <h3 className="text-lg text-gray-800 dark:text-gray-200 font-semibold">{job.role} at {job.company}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
                    <ul className="list-disc pl-5 mt-2">
                        {job.tasks.map((task, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-400">{task}</li>
                        ))}
                    </ul>
                    <h5 className="text-lg text-gray-800 dark:text-gray-200 font-semibold">{job.Accomplishments}</h5>
                </div>
            ))}
        </section>
    );
};

export default Experience;
