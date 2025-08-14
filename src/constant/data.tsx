import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SiLeetcode } from "react-icons/si";


interface DATA {
    name: string;
    location: string;
    socialMedia: {
        title: string;
        link: string;
        icon?: React.ReactNode;
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

//LAV KUMAR YADAV
// export const data: DATA = {
//     name: "Lav Kumar Yadav",
//     location: "Ghaziabad, Uttar Pradesh",
//     socialMedia: [
//         {
//             title: "LinkedIn",
//             link: "https://www.linkedin.com/in/lav-kumar-yadav-b26853223/",
//             icon: <Linkedin size={16} />
//         },
//         {
//             title: "+91 6392737953",
//             link: "tel:+916392737953",
//             icon: <Phone size={16} />
//         },
//         {
//             title: "lavkumar3000@gmail.com",
//             link: "mailto:lavkumar3000@gmail.com",
//             icon: <Mail size={16} />
//         },
//         {
//             title: "GitHub",
//             link: "https://github.com/lav5588",
//             icon: <Github size={16} />
//         },
//         {
//             title: "Leetcode",
//             link: "https://leetcode.com/u/lav5588/",
//             icon: <SiLeetcode size={16} />
//         },
//         {
//             title: "Portfolio",
//             link: "https://lav-kumar-yadav.onrender.com/"
//         }
//     ],
//     ProfilePic: "LAV PROFILE.jpg",
//     proffesionalSummary: "Aspiring Full Stack Software Developer with hands-on experience in designing, developing, testing, and deploying scalable applications using JavaScript, React.js, Node.js, and SQL/MongoDB. Skilled in Agile development practices, SDLC, and collaborative problem-solving. Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. Familiar with cloud technologies (AWS) and passionate about building efficient, secure, and user-focused solutions.",
//     educationAndQualification: [
//         {
//             degree: "B.Tech",
//             branch: "Computer Science and Engineering (Data Science)",
//             institute: "ABES Engineering College – Ghaziabad",
//             time: "11/2022 - 07/2026",
//             result: "GPA : 7.6"
//         },
//         {
//             degree: "Class 12th (UP Board)",
//             branch: "",
//             institute: "Maharshi Arvind Vidya Mandir VMV",
//             time: "2021",
//             result: "89.0%"
//         },
//         {
//             degree: "Class 10th (UP Board)",
//             branch: "",
//             institute: "Maharshi Arvind Vidya Mandir VMV",
//             time: "2018",
//             result: "88.1%"
//         }
//     ],
//     technicalSkills: [
//         {
//             title: "Programming Languages",
//             skills: "Java, Python, JavaScript, C++, SQL"
//         },
//         {
//             title: "Frameworks & Libraries",
//             skills: "React.js, Next.js, Node.js, Express.js, Tailwind CSS, Redux Toolkit, ShadCN"
//         },
//         {
//             title: "Databases",
//             skills: "MySQL, PostgreSQL, MongoDB, SQL Server"
//         },
//         {
//             title: "Cloud & Tools",
//             skills: "AWS (Academy Certified), Git, GitHub"
//         },
//         {
//             title: "Core Concepts",
//             skills: "Data Structures and Algorithms, Object-Oriented Programming (OOP), PL/SQL, API Development, Operating Systems, Computer Networks"
//         },
//         {
//             title: "Problem Solving",
//             skills: "900+ problems solved across LeetCode, GFG, and CodeChef | Highest Ratings: LeetCode 1724, CodeChef 1651"
//         }
//     ],
//     projects: [
//         {
//             title: "WriteFlow – A Modern Blogging Platform",
//             link: "https://writeflow-m57w.onrender.com/",
//             time: "12/2024 - Present",
//             points: [
//                 <>Developed a full-stack blogging platform using <b>Next.js</b> and <b>MongoDB</b> with a responsive UI powered by <b>ShadCN</b> and <b>Tailwind CSS</b>.</>,
//                 <>Implemented secure authentication with <b>Auth.js</b> (Credential Provider) and password reset via Resend, following best practices in API security and SDLC processes.</>,
//                 <>Integrated <b>Tiptap</b> editor for rich text content creation with features like drafts, publish/unpublish, and previews, improving user experience.</>,
//                 <>Added server-side pagination and performance optimizations for faster load times and accessibility compliance.</>,
//                 <>Currently integrating <b>ImageKit</b> for drag-and-drop and paste image uploads, aligned with real-world content management workflows.</>,
//                 <><b>Tech Stack:</b> Next.js, React.js, ShadCN, Tailwind CSS, Auth.js, Tiptap, MongoDB, ImageKit, Resend</>
//             ]
//         },
//         {
//             title: "Cypher Speak – A Real-Time Chat Platform",
//             link: "https://github.com/lav5588/cypherspeak",
//             time: "04/2024 - 06/2024",
//             points: [
//                 <>Built a real-time one-to-one chat application using <b>React.js</b>, <b>Node.js</b>, and <b>Socket.IO</b> for instant communication.</>,
//                 <>Implemented secure authentication, persistent messaging with MongoDB, and user presence indicators.</>,
//                 <>Followed modular design principles and implemented features in iterative sprints, simulating Agile methodology.</>,
//                 <><b>Tech Stack:</b> Socket.IO, React.js, Node.js, Express.js, MongoDB</>
//             ]
//         }
//     ],
//     certifications: [
//         {
//             title: "AWS Academy Introduction to Cloud Semester I",
//             link: "https://drive.google.com/file/d/16yKEmvxEBuCkub9oYmypkFqpNrh1dXNm/view"
//         },
//         {
//             title: "AWS Academy Introduction to Cloud Semester II",
//             link: "https://drive.google.com/file/d/1megAoF0jsr2IX2U6z-Xr_lE23FlEZBGQ/view"
//         },
//         {
//             title: "Programming in C (Infosys Springboard)",
//             link: "https://drive.google.com/file/d/12-l-rqRYNrFyXdEgN2xoQahTUw6IKgFs/view"
//         },
//         {
//             title: "PCAP - Programming Essentials in Python through Cisco Networking Academy",
//             link: "https://drive.google.com/file/d/1Ct0PbLCTbmeNhPmNPqeC6bnclAFSJBqH/view"
//         }
//     ]
// };




//Saif Ali
// export const data: DATA = {
//     name: "MD SAIF ALI",
//     location: "Ghaziabad, Uttar Pradesh",
//     socialMedia: [
//         {
//             title: "LinkedIn",
//             link: "https://www.linkedin.com/in/md-saif-ali-a3250825b/",
//             icon: <Linkedin size={16} />
//         },
//         {
//             title: "+91 9142612364",
//             link: "tel:+919142612364",
//             icon: <Phone size={16} />
//         },
//         {
//             title: "mdsa9176@gmail.com",
//             link: "mailto:mdsa9176@gmail.com",
//             icon: <Mail size={16} />
//         },
//         {
//             title: "GitHub",
//             link: "https://github.com/mohdsaif13",
//             icon: <Github size={16} />
//         },
//         {
//             title: "Leetcode",
//             link: "https://leetcode.com/u/Md_saif_ali_13/",
//             icon: <SiLeetcode size={16} />
//         },
//     ],
//     ProfilePic: "SAIF_PROFILE.jpg",
//     proffesionalSummary: "Aspiring Data Scientist with hands-on experience designing, building, and deploying end-to-end machine learning solutions. Proven ability to handle the full project lifecycle, from data collection and web scraping to model development, containerization with Docker, and cloud deployment on platforms like Azure. Proficient in Python, deep learning frameworks, MLOps workflows, and generative AI. A quick learner with a collaborative mindset, passionate about leveraging data to solve complex business problems and drive strategic value.",
//     educationAndQualification: [
//         {
//             degree: "B.Tech",
//             branch: "Computer Science and Engineering (Data Science)",
//             institute: "ABES Engineering College – Ghaziabad",
//             time: "11/2022 - 07/2026",
//             result: "GPA : 7.68"
//         },
//         // {
//         //     degree: "Class 12th (UP Board)",
//         //     branch: "",
//         //     institute: "Maharshi Arvind Vidya Mandir VMV",
//         //     time: "2021",
//         //     result: "89.0%"
//         // },
//         // {
//         //     degree: "Class 10th (UP Board)",
//         //     branch: "",
//         //     institute: "Maharshi Arvind Vidya Mandir VMV",
//         //     time: "2018",
//         //     result: "88.1%"
//         // }
//     ],
//     technicalSkills: [
//         {
//             title: "Languages & Tools",
//             skills: "Python, SQL, Git, GitHub, Jupyter, Java"
//         },
//         {
//             title: "Data Handling",
//             skills: "NumPy, Pandas, Data Cleaning, EDA, Matplotlib, Seaborn, Plotly"
//         },
//         {
//             title: "ML & Stats",
//             skills: "Regression, Classification, Clustering, PCA, Hypothesis Testing, XGBoost, LightGBM, CatBoost, Model Evaluation, Hyperparameter Tuning"
//         },
//         {
//             title: "Deep Learning",
//             skills: "ANN, CNN, RNN, TensorFlow, Keras, PyTorch, Image Classification, Object Detection"
//         },
//         {
//             title: "NLP",
//             skills: "NLTK, spaCy, Tokenization, Lemmatization, Transformers"
//         },
//         {
//             title: "Generative AI",
//             skills: "LangChain, OpenAI API, Prompt Engineering, RAG"
//         },
//         {
//             title: "Deployment & MLOps",
//             skills: "Flask, Streamlit, Gradio, Pickle, Joblib, Docker (Basics), CI/CD Concepts"
//         },
//         {
//             title: "Soft Skills",
//             skills: "Problem Solving, Communication, Teamwork."
//         },
//     ],
//     projects: [
//         {
//             title: "Customer churn prediction system",
//             link: "https://github.com/mohdsaif13",
//             time: "Feb 2025 - March 2025",
//             points: [
//                 <>Developed a supervised learning model to predict customer churn using Random Forest and Logistic Regression</>,
//                 <>Conducted EDA, feature engineering, and model evaluation to improve F1-score</>,
//                 <>Built and deployed an interactive dashboard using Streamlit</>,
//             ]
//         },
//         {
//             title: "Climate Visibility Prediction",
//             link: "https://github.com/mohdsaif13",
//             time: "April 2025 - June 2025",
//             points: [
//                 <>Architected and implemented an end-to-end machine learning pipeline to predict climate visibility distance based on meteorological data. </>,
//                 <>Developed and trained an XGBoost model on a large dataset, performing extensive feature engineering and data preprocessing to optimize performance. </>,
//                 <>Containerized the complete application using Docker and created RESTful APIs with FastAPI for model serving. </>,
//                 <>Designed and automated a full CI/CD workflow using GitHub Actions for continuous integration and deployment to Microsoft Azure, ensuring a robust, scalable solution. </>,
//                 <>Utilized AWS S3 for model registry and MongoDB for database management in a distributed data collection architecture.</>,
//                 <><b>Technologies:</b> Python, XGBoost, Docker, FastAPI, MongoDB, AWS S3, Azure, CI/CD (GitHub Actions) </>,
//             ]
//         },
//         {
//             title: "Commerce site Review Scraper & Analysis",
//             link: "https://github.com/mohdsaif13",
//             time: "June 2025 - August 2025",
//             points: [
//                 <>Developed a robust web scraper using Python and BeautifulSoup to automatically extract thousands of customer reviews, product ratings, and user feedback from Myntra.com. </>,
//                 <>Engineered a data processing pipeline with Pandas to clean, transform, and structure the raw scraped data into an analysis-ready format (e.g., CSV). </>,
//                 <>Built an interactive web interface using Flask and Streamlit, allowing users to input a product URL and receive the structured data for download. </>,
//                 <>The project provides a valuable dataset for gaining insights into customer sentiment and can be extended with NLP for automated sentiment analysis.</>,
//                 <><b>Technologies:</b> Python, BeautifulSoup, Requests, Pandas, Flask, Streamlit</>,
//             ]
//         },

//     ],
//     certifications: [

//     ]
// };


// NITEESH KUMAR PAL
export const data: DATA = {
    name: "NITEESH KUMAR PAL",
    location: "Ghaziabad, Uttar Pradesh",
    socialMedia: [
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/niteesh-pal-329157256/",
            icon: <Linkedin size={16} />
        },
        {
            title: "+91 8103160938",
            link: "tel:+918103160938",
            icon: <Phone size={16} />
        },
        {
            title: "niteeshpal585@gmial.com",
            link: "mailto:niteeshpal585@gmial.com",
            icon: <Mail size={16} />
        },
        {
            title: "GitHub",
            link: "https://github.com/niteeshpal12",
            icon: <Github size={16} />
        },
        {
            title: "Leetcode",
            link: "https://leetcode.com/u/niteeshpal12/",
            icon: <SiLeetcode size={16} />
        },
    ],
    ProfilePic: "",
    proffesionalSummary: "Results-driven and detail-oriented Software Engineer with a strong foundation in data structures, algorithms, and object-oriented programming. Proficient in modern programming languages such as C++, Java, and Python, with hands-on experience in developing web applications using HTML, CSS, JavaScript, and React. Adept at problem-solving, optimizing code efficiency, and collaborating in team environments to deliver high-quality software solutions. Passionate about continuous learning and staying updated with emerging technologies to create scalable, efficient, and user-focused applications.",
    educationAndQualification: [
        {
            degree: "B.Tech",
            branch: "Computer Science and Engineering (Data Science)",
            institute: "ABES Engineering College – Ghaziabad",
            time: "11/2022 - 07/2026",
            result: "GPA : 7.5"
        },
    ],
    technicalSkills: [
        {
            title: "Languages & Frameworks",
            skills: "JavaScript, React.js, Node.js, Express.js, Next.js, Tailwind CSS, Redux Toolkit, C/C++, Java "
        },
        {
            title: "Frontend",
            skills: "HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS "
        },
        {
            title: "Backend & Tools",
            skills: "Express.js, REST APIs, MongoDB/MySQL"
        },
        {
            title:"ML & Stats",
            skills:" Regression, Classification, Clustering, PCA, Hypothesis Testing, XGBoost, LightGBM, CatBoost, Model Evaluation, Hyperparameter Tuning "
        },
        {
            title:"Deep Learning",
            skills:"ANN, CNN, RNN, TensorFlow, Keras, PyTorch, Image Classification, Object Detection "
        },
        {
            title:"NLP",
            skills:"NLTK, spaCy, Tokenization, Lemmatization, Transformers"
        },
        {
            title: "Version Control",
            skills: " Git, GitHub "
        },
        {
            title: "CS Fundamentals",
            skills: "Data Structures & Algorithms, OOP, OS, CN "
        },
        {
            title: "Problem Solving",
            skills: "CodeChef: Highest Rating 1400 LeetCode: Highest Rating 1500 | 150+ Problems Solved Regular on GFG"
        },

    ],
    projects: [
        {
            title: "Learning Management System ",
            link: "https://github.com/niteeshpal12",
            time: "May-2025 - August 2025",
            points: [
                <>Designed and developed a Learning Management System (LMS) enabling course creation, student enrollment, and progress tracking.</>,
                <>Implemented a responsive front-end interface using React.js for seamless user experience across devices.</>,
                <>Built secure REST APIs with Node.js and Express.js for handling authentication, course management, and user data.</>,
                <>Integrated MySQL database for efficient data storage, retrieval, and scalability.</>,
                <>Added features such as assignment submissions, interactive content, and performance analytics to enhance learning engagement.</>,
            ]
        },
        {
            title: "Customer churn prediction system",
            link: "https://github.com/niteeshpal12",
            time: "Feb 2025 - March 2025",
            points: [
                <>Developed a supervised learning model to predict customer churn using Random Forest and Logistic Regression, achieving high accuracy and improved F1-score.</>,
                <>Conducted exploratory data analysis (EDA), feature engineering, and data preprocessing to enhance model performance and interpretability.</>,
                <>Implemented hyperparameter tuning with GridSearchCV to optimize model efficiency.</>,
                <>Built and deployed an interactive dashboard using Streamlit to visualize churn trends, model predictions, and customer segmentation.</>,
                <>Integrated real-time prediction functionality, enabling businesses to input customer data and instantly assess churn risk.</>,
                <>Documented workflows, findings, and insights to support decision-making and future model enhancements.</>,
            ]
        },

    ],
    certifications: [
        {
            title: "Data science training certificate",
            link: "https://drive.google.com/file/d/1z5U1RVgOF4mtmLM5FwXv_FPZ_nhsoUxV/view"
        },
        {
            title: "Programming Essentials in Python ",
            link: "https://drive.google.com/file/d/1I7njwRMlm5XaQm2nor75VNvXjLSJvqKG/view"
        },
        {
            title: "Python_Essential_1",
            link: "https://drive.google.com/file/d/1tS3g3AepKWA1hOvQaxv9TOQaoZw6zAkv/view"
        },
        {
            title: "Data Structures & Algorithms Certification - CodeHelp ",
            link: ""
        },

    ]
};
