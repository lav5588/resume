

interface DATA{
    name: string;
    location: string;
    socialMedia: {
        title: string;
        link: string;
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


export const data:DATA = {
    name: "Lav Kumar yadav",
    location: "Ghaziabad, Uttar Pradesh",
    socialMedia: [
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/lav-kumar-yadav-b26853223/"
        },
        {
            title: "+91 6392737953",
            link: "tel:+916392737953"
        },
        {
            title: "lavkumar3000@gmail.com",
            link: "mailto:lavkumar3000@gmail.com"
        },
        {
            title: "GitHub",
            link: "https://github.com/lav5588"
        },
        {
            title: "Leetcode",
            link: "https://leetcode.com/u/lav5588/"
        },
        {
            title: "Portfolio",
            link: "https://lav-kumar-yadav.onrender.com/"
        }
    ],
    ProfilePic: "/LAV PROFILE.jpg",
    proffesionalSummary: "Aspiring Full Stack Software Developer Trainee with hands-on experience building scalable applications using React.js, Node.js, and SQL/MongoDB. Strong understanding of full stack development, database management, and data structures. Passionate about learning, solving complex problems, and converting financial or technical concepts into practical, efficient code solutions.",
    educationAndQualification: [
        {
            degree: "B.tech",
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
        },
    ],
    technicalSkills: [
        {
            title: "Languages & Frameworks",
            skills: "JavaScript, React.js, Node.js, Express.js, Next.js, Tailwind CSS, Redux Toolkit, C++"
        },
        {
            title: "Databases",
            skills: "MySQL, PostgreSQL, MongoDB"
        },
        {
            title: "Version Control",
            skills: "Git, GitHub"
        },
        {
            title: "Backend",
            skills: "Node.js, Express.js, API Integration, Database Design"
        },
        {
            title: "Frontend",
            skills: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Shadcn"
        },
        {
            title: "Other Skills",
            skills: "Data Structures and Algorithms, Design and Analysis of Algorithms, Object-Oriented Programming (OOP),"
        },
        {
            title: "Systems & Networks:",
            skills: "Computer Networks, Operating Systems (OS), Linux, Windows"
        },
        {
            title: "Problem Solving",
            skills: "CodeChef 2 rating, 1651 highest contest rating on CodeChef, 1724 highest contest rating on LeetCode, 900+ problems solved on LeetCode, GFG and CodeChef"
        }
    ],
    projects: [
        {
            title: "WriteFlow- A Modern Blogging Platform",
            link: "https://writeflow-m57w.onrender.com/",
            time: "12/2024 - Present",
            points: [
                <>Developed a modern, full-stack blogging platform using <b>Next.js</b>, with a sleek and responsive UI built using <b>ShadCN</b> and  and <b>Tailwind CSS</b> for a seamless writing experience.</>,
                <>Implemented robust authentication with <b>Auth.js</b> (Credential Provider), including secure password reset via Resend, while following modern best practices in API design and security.</>,
                <>Integrated <b>Tiptap</b> for rich text editing, allowing users to create, edit, preview, save drafts, publish/unpublish, and delete blog posts through an intuitive interface.</>,
                <>Added server-side <b>pagination</b> and optimized performance and accessibility to ensure fast and inclusive user experiences across all devices.</>,
                <>Currently integrating <b>ImageKit</b> to enable drag-and-drop, paste, and dynamic image upload capabilities within the editor for seamless media management.</>,
                <>Gained hands-on experience building a complete content management system with production-ready features and robust backend logic using MongoDB and Next.js API routes.</>,
                <><b>Tech Stack:</b> Next.js, React.js, shadcn (UI components), Auth.js (Credential Provider),Tiptap (Rich text editing), MongoDB, Imagekit(For dynamic image uploads and management), Tailwind CSS, Resend (email service)</>,
            ]
        },
        {
            title: "Cypher Speak – A Real-Time Chat Platform",
            link: "https://github.com/lav5588/cypherspeak",
            time: "04/2024 - 06/2024",
            points: [
                <>Built a full-stack real-time chat application with <b>React.js</b> and <b>Node.js</b>, enhanced with <b>Socket.IO</b> for WebSocket-based real-time communication and <b>MongoDB</b> for persistent chat and user data.</>,
                <>Designed a clean, responsive, and interactive UI using React.js, with full authentication flow (Signup, Login, Logout) to manage users securely.</>,
                <>Implemented real-time one-to-one messaging with message history, unread message tracking, and persistent chat storage using MongoDB.</>,
                <>Added presence indicators (online/offline status via colored dots) and unread message badges, giving a polished user experience similar to production chat apps.</>,
                <>Backend built using Node.js, <b>Express.js</b>, and Socket.IO, handling user sessions, connections, and messaging events efficiently with real-time updates.</>,
                <><b>Tech Stack:</b> Socket.io, React.js, Node.js, Express.js, MongoDB</>,
            ]
        }
    ],
    certifications: [
        {
            title: "AWS Academy Introduction to Cloud Semester I",
            link: "https://drive.google.com/file/d/16yKEmvxEBuCkub9oYmypkFqpNrh1dXNm/view",
        },
        {
            title: "AWS Academy Introduction to Cloud Semester II",
            link: "https://drive.google.com/file/d/1megAoF0jsr2IX2U6z-Xr_lE23FlEZBGQ/view",
        },
        {
            title: "Programming in C (Infosys Springboard)",
            link: "https://drive.google.com/file/d/12-l-rqRYNrFyXdEgN2xoQahTUw6IKgFs/view",
        },
        {
            title: "PCAP - Programming Essentials in Python through Cisco networking academy",
            link: "https://drive.google.com/file/d/1Ct0PbLCTbmeNhPmNPqeC6bnclAFSJBqH/view",
        },
    ]

}
