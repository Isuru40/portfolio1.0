import React from 'react';

const Footer = ({ navBackground, navLinkColor }) => {
    return (
        <footer className={`${navBackground} text-center py-4`}>
            <p className={`${navLinkColor}`}>&copy; {new Date().getFullYear()} Isuru Ranaweera. All Rights Reserved.</p>
            {/*<p>*/}
            {/*    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className={`${navLinkColor} hover:underline`}>LinkedIn</a> |*/}
            {/*    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className={`${navLinkColor} hover:underline`}> GitHub</a> |*/}
            {/*    <a href="https://stackoverflow.com/users/your-stackoverflow" target="_blank" rel="noopener noreferrer" className={`${navLinkColor} hover:underline`}> Stack Overflow</a>*/}
            {/*</p>*/}
        </footer>
    );
};

export default Footer;
