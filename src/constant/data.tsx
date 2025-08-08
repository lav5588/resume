import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SiLeetcode } from "react-icons/si";


interface DATA{
    name: string;
    location: string;
    socialMedia: {
        title: string;
        link: string;
        icon?:React.ReactNode;
    }[];
    ProfilePic: string;
    proffesionalSummary: string;
    educationAndQualification: {
        degree: string;
        branch: string;
        institute: string;
        time: string;
        result: string;
    }[];
    technicalSkills: {
        title: string;
        skills: string;
    }[];
    projects: {
        title: string;
        link: string;
        time: string;
        points: React.ReactNode[];
    }[];
    certifications: {
        title: string;
        link: string;
    }[];
}


export const data: DATA = {
    name: "Lav Kumar Yadav",
    location: "Ghaziabad, Uttar Pradesh",
    socialMedia: [
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/lav-kumar-yadav-b26853223/",
            icon: <Linkedin size={16} />
        },
        {
            title: "+91 6392737953",
            link: "tel:+916392737953",
            icon: <Phone size={16} />
        },
        {
            title: "lavkumar3000@gmail.com",
            link: "mailto:lavkumar3000@gmail.com",
            icon: <Mail size={16} />
        },
        {
            title: "GitHub",
            link: "https://github.com/lav5588",
            icon: <Github size={16} />
        },
        {
            title: "Leetcode",
            link: "https://leetcode.com/u/lav5588/",
            icon: <SiLeetcode size={16} />
        },
        {
            title: "Portfolio",
            link: "https://lav-kumar-yadav.onrender.com/"
        }
    ],
    ProfilePic: "LAV PROFILE.jpg",
    proffesionalSummary:
        "Aspiring Full Stack Software Developer with hands-on experience in designing, developing, testing, and deploying scalable applications using JavaScript, React.js, Node.js, and SQL/MongoDB. Skilled in Agile development practices, SDLC, and collaborative problem-solving. Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. Familiar with cloud technologies (AWS) and passionate about building efficient, secure, and user-focused solutions.",
    educationAndQualification: [
        {
            degree: "B.Tech",
            branch: "Computer Science and Engineering (Data Science)",
            institute: "ABES Engineering College – Ghaziabad",
            time: "11/2022 - 07/2026",
            result: "GPA : 7.6"
        },
        {
            degree: "Class 12th (UP Board)",
            branch: "",
            institute: "Maharshi Arvind Vidya Mandir VMV",
            time: "2021",
            result: "89.0%"
        },
        {
            degree: "Class 10th (UP Board)",
            branch: "",
            institute: "Maharshi Arvind Vidya Mandir VMV",
            time: "2018",
            result: "88.1%"
        }
    ],
    technicalSkills: [
        {
            title: "Programming Languages",
            skills: "Java, Python, JavaScript, C++, SQL"
        },
        {
            title: "Frameworks & Libraries",
            skills: "React.js, Next.js, Node.js, Express.js, Tailwind CSS, Redux Toolkit, ShadCN"
        },
        {
            title: "Databases",
            skills: "MySQL, PostgreSQL, MongoDB, SQL Server"
        },
        {
            title: "Cloud & Tools",
            skills: "AWS (Academy Certified), Git, GitHub"
        },
        {
            title: "Core Concepts",
            skills: "Data Structures and Algorithms, Object-Oriented Programming (OOP), PL/SQL, API Development, Operating Systems, Computer Networks"
        },
        {
            title: "Problem Solving",
            skills: "900+ problems solved across LeetCode, GFG, and CodeChef | Highest Ratings: LeetCode 1724, CodeChef 1651"
        }
    ],
    projects: [
        {
            title: "WriteFlow – A Modern Blogging Platform",
            link: "https://writeflow-m57w.onrender.com/",
            time: "12/2024 - Present",
            points: [
                <>Developed a full-stack blogging platform using <b>Next.js</b> and <b>MongoDB</b> with a responsive UI powered by <b>ShadCN</b> and <b>Tailwind CSS</b>.</>,
                <>Implemented secure authentication with <b>Auth.js</b> (Credential Provider) and password reset via Resend, following best practices in API security and SDLC processes.</>,
                <>Integrated <b>Tiptap</b> editor for rich text content creation with features like drafts, publish/unpublish, and previews, improving user experience.</>,
                <>Added server-side pagination and performance optimizations for faster load times and accessibility compliance.</>,
                <>Currently integrating <b>ImageKit</b> for drag-and-drop and paste image uploads, aligned with real-world content management workflows.</>,
                <><b>Tech Stack:</b> Next.js, React.js, ShadCN, Tailwind CSS, Auth.js, Tiptap, MongoDB, ImageKit, Resend</>
            ]
        },
        {
            title: "Cypher Speak – A Real-Time Chat Platform",
            link: "https://github.com/lav5588/cypherspeak",
            time: "04/2024 - 06/2024",
            points: [
                <>Built a real-time one-to-one chat application using <b>React.js</b>, <b>Node.js</b>, and <b>Socket.IO</b> for instant communication.</>,
                <>Implemented secure authentication, persistent messaging with MongoDB, and user presence indicators.</>,
                <>Followed modular design principles and implemented features in iterative sprints, simulating Agile methodology.</>,
                <><b>Tech Stack:</b> Socket.IO, React.js, Node.js, Express.js, MongoDB</>
            ]
        }
    ],
    certifications: [
        {
            title: "AWS Academy Introduction to Cloud Semester I",
            link: "https://drive.google.com/file/d/16yKEmvxEBuCkub9oYmypkFqpNrh1dXNm/view"
        },
        {
            title: "AWS Academy Introduction to Cloud Semester II",
            link: "https://drive.google.com/file/d/1megAoF0jsr2IX2U6z-Xr_lE23FlEZBGQ/view"
        },
        {
            title: "Programming in C (Infosys Springboard)",
            link: "https://drive.google.com/file/d/12-l-rqRYNrFyXdEgN2xoQahTUw6IKgFs/view"
        },
        {
            title: "PCAP - Programming Essentials in Python through Cisco Networking Academy",
            link: "https://drive.google.com/file/d/1Ct0PbLCTbmeNhPmNPqeC6bnclAFSJBqH/view"
        }
    ]
};
