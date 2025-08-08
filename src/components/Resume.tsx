import React from "react";
import "./Resume.css";

interface HeaderProps{
    name: string;
    location: string;
    contacts: { label: string; href: string }[];
    photo: string
}

const Header = ({ name, location, contacts, photo }:HeaderProps) => {
    return (
        <div className="header">
            <div className="header-left">
                <h1>{name}</h1>
                <p className="location">{location}</p>
                <div className="contact-info">
                    {contacts.map((c, i) => (
                        <React.Fragment key={i}>
                            <a href={c.href} target="_blank" rel="noreferrer">
                                {c.label}
                            </a>
                            {i < contacts.length - 1 && <span className="divider">|</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="header-photo">
                <img src={photo} alt={name} />
            </div>
        </div>
    );
};

export default function Resume() {
    return (
        <div className="resume-container">
            {/* Header */}
            <Header
                name="Lav Kumar Yadav"
                location="Ghaziabad, Uttar Pradesh"
                photo="/LAV PROFILE.jpg"
                contacts={[
                    {
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/in/lav-kumar-yadav-b26853223/",
                    },
                    { label: "+91 6392737953", href: "tel:+916392737953" },
                    { label: "lavkumar3000@gmail.com", href: "mailto:lavkumar3000@gmail.com" },
                    { label: "GitHub", href: "https://github.com/lav5588" },
                    { label: "Leetcode", href: "https://leetcode.com/u/lav5588/" },
                    { label: "Portfolio", href: "https://lav-kumar-yadav.onrender.com/" },
                ]}
            />

            {/* Professional Summary */}
            <section>
                <h2>Professional Summary</h2>
                <p>
                    Aspiring Full Stack Software Developer Trainee with hands-on
                    experience building scalable applications using React.js, Node.js,
                    and SQL/MongoDB. Strong understanding of full stack development,
                    database management, and data structures. Passionate about learning,
                    solving complex problems, and converting financial or technical
                    concepts into practical, efficient code solutions.
                </p>
            </section>

            {/* Education */}
            <section>
                <h2>Education & Qualifications</h2>
                <ul>
                    <li>
                        <strong>B.Tech:</strong> Computer Science and Engineering (Data
                        Science) — ABES Engineering College, Ghaziabad (GPA: 7.6){" "}
                        <em>(11/2022 - 07/2026)</em>
                    </li>
                    <li>
                        <strong>Class 12th:</strong> Maharshi Arvind Vidya Mandir VMV
                        (89.0%) — 2021
                    </li>
                    <li>
                        <strong>Class 10th:</strong> Maharshi Arvind Vidya Mandir VMV
                        (88.1%) — 2018
                    </li>
                </ul>
            </section>

            {/* Technical Skills */}
            <section>
                <h2>Technical Skills</h2>
                <ul>
                    <li>
                        <strong>Languages & Frameworks:</strong> JavaScript, React.js,
                        Node.js, Express.js, Next.js, Tailwind CSS, Redux Toolkit, C++
                    </li>
                    <li>
                        <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB
                    </li>
                    <li>
                        <strong>Version Control:</strong> Git, GitHub
                    </li>
                    <li>
                        <strong>Backend:</strong> Node.js, Express.js, API Integration,
                        Database Design
                    </li>
                    <li>
                        <strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript,
                        React.js, Next.js, Tailwind CSS, Shadcn
                    </li>
                    <li>
                        <strong>Other Skills:</strong> DSA, OOP, OS, Linux, Windows
                    </li>
                    <li>
                        <strong>Problem Solving:</strong> CodeChef 2★, 1651 highest contest
                        rating on CodeChef, 1724 highest contest rating on LeetCode, 900+
                        problems solved
                    </li>
                </ul>
            </section>

            {/* Projects */}
            <section>
                <h2>Projects</h2>
                <div className="project">
                    <div className="project-title">
                        <span>WriteFlow - A Modern Blogging Platform</span>
                        <span className="date">12/2024 - Present</span>
                    </div>
                    <p>
                        Developed a modern, full-stack blogging platform using Next.js,
                        ShadCN, and Tailwind CSS with robust authentication, Tiptap editor,
                        pagination, and image upload integration via ImageKit.
                    </p>
                </div>
                <div className="project">
                    <div className="project-title">
                        <span>Cypher Speak – A Real-Time Chat Platform</span>
                        <span className="date">04/2024 - 06/2024</span>
                    </div>
                    <p>
                        Built a full-stack real-time chat application using React.js,
                        Node.js, Socket.IO, and MongoDB with authentication, presence
                        indicators, unread message tracking, and a responsive UI.
                    </p>
                </div>
            </section>

            {/* Certifications */}
            <section>
                <h2>Certifications</h2>
                <ul>
                    <li>AWS Academy Introduction to Cloud Semester I</li>
                    <li>AWS Academy Introduction to Cloud Semester II</li>
                    <li>Programming in C (Infosys Springboard)</li>
                    <li>
                        PCAP - Programming Essentials in Python (Cisco Networking Academy)
                    </li>
                </ul>
            </section>
        </div>
    );
}
