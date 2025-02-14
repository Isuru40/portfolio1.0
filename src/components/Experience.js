import React from 'react';

const Experience = () => {
    const experiences = [
        {
            project: 'ClassEka.lk',
            projectRole: 'Full Stack Developer ',
            company: 'ClassEka.lk  (External Contact- Part Time - Fully Remote)',
            period: 'June 2023 - Present ( 1+ Year)',
            isPresent: true,
            businessProblem: 'Educational site where teachers and students.',
            tasksHandled: [
                'Engaged diverse development tasks encompassing both backend and frontend development with contributing to user-friendly features, UI/UX designs and layouts using React.',
                'Firebase Authentication, Firestore DB, cloud function implementation and End to end software integration.',

            ],
            accomplishments: [

            ]
        },
        {
            project: 'Next Generation Trading Platform (NTP-Morgan Stanly Saudi Arabia, Saudi Franci capital, etc)',
            projectRole: 'Senior Software Engineer',
            company: 'DirectFN(Previously MUBASHER) (Sri Lanka/Saudi Arabia)',
            period: 'May 2023 - August 2024  (1 Year 3 Months)',
            businessProblem: 'AT is a Multi-Tenant Cloud Native client-server application using Microservice architecture' +
                ' aimed at supporting and automating the Back-Office workflows, It covers fully fledged Back-Office client automating, ' +
                'the Administrative and Back-Office workflows related to Customer Account Management, User Roles and Entitlements Management,' +
                ' Risk Parameter Management, Finance Management, Compliance, Reconciliation / Settlements and MIS Reporting.' +
                ' It has to automate batch wise file processing for reconciliation instead of manual approach',
            tasksHandled: [
                'Responsible for core architectural design changes and development.',
                'Engages in Full-stack development for the NTP, including the Admin Terminal (Frontend) and the Back Office Server (BOS - Backend), with Oracle DB integration to meet system requirements and technical specifications.',
                'Ensures adherence to quality-accredited standards (SaaS Products).',
                'Collaborates closely with stakeholders such as product managers, business analysts, and QA teams to gather requirements, define project scope, and ensure alignment with organizational objectives.',
                'Entrusted with critical responsibilities as a code reviewer and mentor for new engineers, ensuring high standards of code quality and supporting team skill development.',
                'Developed file processing and reconciliation related to the FIX protocol.',
                'Designs, develops, and maintains high-quality software solutions for internal and external stakeholders.',
                'Collaborates with cross-functional teams to ensure efficient and effective delivery of software projects.',
                'Takes ownership of development assignments, ensuring timely and accurate completion.',
                'Contributes to the redevelopment of the core platform using the latest technologies.',
                'Participates in code reviews, testing, and debugging to ensure software quality and reliability.',
                'Continuously improves skills and stays updated with industry trends and advancements.',
                'Provides technical guidance and mentorship to junior developers.',
                'PTTP3 - Saudi Arabian Market Changes Requirement',
                'Implemented across 8+ Brokerages in Saudi Arabia including major banks such as Crédit Agricole Corporate and Investment Bank Subsidiary (Saudi Fransi Capital) & Morgan Stanley of Saudi Arabia',
                'Database related Developments according to system requirements (Procedures, Views, Triggers, Functions, Jobs writing and modification etc.).',
            ],
            accomplishments: [
                'Transferred to the Kingdom of Saudi Arabia for Project Go-Live and Feature Go-Live developments, leading the design, development, and successful launch of the NTP E-Invoicing Solution, impacting over 500+ users, while taking ownership of solution implementations on behalf of the AT team.',
                'Led the successful launch of the New Trading Platform for Morgan Stanley Saudi Arabia (Institutional Trading), analyzing 35+ gap items in the legacy system and conducting training for over 20 officers, resulting in 85% increase in operational efficiency.',
                'Contributed to the development and enhancement of over 30 unique UI components for various menu items, ensuring a seamless and intuitive user experience and improved the overall frontend performance and accessibility by optimizing design and implementing responsive layouts.'
            ]
        },
        {
            project: 'NTP Admin Terminal - Core',
            projectRole: 'Software Engineer',
            company: 'DirectFN(Previously MUBASHER)  (Sri Lanka/Saudi Arabia)',
            period: 'May 2021 - May 2023  (2 Year)',
            businessProblem: 'It is a solution to replace an existing legacy brokerage application by latest technologies with performance improvements, Design and develop a single code base core client-server architecture which can customizable to multiple levels such as country level and broker level based on the requirement of our clients.  It can be used as end product or core library for end products.',
            tasksHandled: [
                'Consistently delivered small features and improvements to enhance system functionality.',
                'Conducted Product Demonstrations for clients and provided guidance to clients on their concerns.',
                'Managed and optimized the data architecture in Oracle Database, encompassing schema setup, stored procedures, data models, and data mart views for enhanced data accessibility and performance.',
                'Engaging in critical bug fixing tasks and providing insights to team members.',
                'Conducted client demonstrations and facilitated requirement gathering sessions to align solutions with client needs and expectations.',
                'Develop software solutions by studying client requirements, conferring with users, studying systems flow, data usage, and work processes, investigating problem areas, following the software development life-cycle.',
                'Implements best practices in software design, reusability, and maintainability.',
                'Preparing data migration scripts to migrate data from legacy system.',
            ],
            accomplishments: [
                'Established and standardized coding guidelines that enhanced software reusability across projects, resulting in a 35% reduction in development time for new features over an eight-month period.',
                'Created DropCopy file (FIX Protocol) reconciliation feature for Morgan Stanley Saudi Arabia and reduced file reconciliation time by 18 minutes. Initial stage it took up-to 25 minutes to reconcile.',
                'PTTP2 - Saudi Arabian Market Changes implemented across 8+ Brokerages in Saudi Arabia including major banks such Crédit Agricole Corporate and Investment Bank Subsidiary (Saudi Fransi Capital) & Morgan Stanley of Saudi Arabia',
                'Identified and resolved a critical database lock vulnerability in the back-end codebase during product go-live at Saudi Fransi Capital, preventing potential downtime and ensuring 99.9% system availability for over 50+ active users.',
                'Analyzed database query plans and improved report generation speed by 50% through the creation of optimized DB indexes and history tables, reducing processing time from 75 milliseconds to 10 milliseconds.',
                'Participated in daily Scrum meetings and code reviews, consistently delivering sprint objectives while reducing customer creation-related JIRA tickets by 75% through enhanced feature implementation.',
                'Created and refined complex data models and schemas in Oracle Database, allowing seamless integration of data sources; the system now accommodates 2M+ records while maintaining optimal performance for real-time reporting.',
                'Delivered product demonstrations for over 50+ clients, addressing concerns and increasing satisfaction by 80%. Ensured adherence to SaaS quality standards, driving increased client adoption.'
            ]
        },
        {
            project: 'BT (British Telecom)',
            projectRole: 'Software Engineer Internship',
            company: 'Virtusa (Sri Lanka)',
            period: 'June 2019 - June 2020  (1 Year)',
            businessProblem: 'Enable seamless cloud integration for legacy systems, R & D works related telco products',
            tasksHandled: [
                'Engaged diverse development tasks encompassing both backend and frontend development including data visualization widgets designing & developing.',
                'Keycloak integration to existing applications, sign-on with Identity and Access Management.',
                'Azure virtual machines and AWS EC2 instance metrics reading platform designing.',
                'Apache Kafka integrated data handler designing & developing.'
            ],
            accomplishments: [
                'Developed a data visualization widget that increased user engagement by 20%.',
                'Successfully integrated Keycloak, improving security across applications.'
            ]
        }
    ];

    return (
        <section id="experience" className="bg-white dark:bg-gray-800 p-4">
            <h2 className="text-black dark:text-white text-2xl font-bold mb-4">Experience</h2>
            {experiences.map((job, index) => (
                <div key={index} className="mb-6 p-4 border rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
                    <h3 className="text-lg text-gray-800 dark:text-gray-200 font-semibold">{job.project}</h3>
                    <h4 className="text-md text-gray-700 dark:text-gray-300">{job.projectRole} at {job.company}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
                    <p className="text-gray-800 dark:text-gray-200 font-bold mt-2">Business Problem:</p>
                    <p className="text-gray-600 dark:text-gray-400">{job.businessProblem}</p>
                    <h4 className="text-md text-gray-800 dark:text-gray-200 font-semibold mt-4">{job.isPresent ? 'Tasks Handling' : 'Tasks Handled'}:</h4>
                    <ul className="list-disc pl-5 mt-2">
                        {job.tasksHandled.map((task, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-400">{task}</li>
                        ))}
                    </ul>
                    {job.accomplishments && job.accomplishments.length > 0 && (
                        <>
                            <h4 className="text-md text-gray-800 dark:text-gray-200 font-semibold mt-4">Accomplishments:</h4>
                            <ul className="list-disc pl-5 mt-2">
                                {job.accomplishments.map((acc, i) => (
                                    <li key={i} className="text-gray-600 dark:text-gray-400">{acc}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Experience;
