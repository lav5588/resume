

export default function Resume() {
    return (
        <div className="bg-white p-8 rounded-lg border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-start pb-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Lav Kumar Yadav</h1>
                    <p className="text-gray-600">Ghaziabad, Uttar Pradesh</p>
                    <div className="mt-2 space-x-2 text-sm text-blue-600">
                        <a href="https://www.linkedin.com/in/lav-kumar-yadav-b26853223/" target="_blank" rel="noreferrer">LinkedIn</a> |
                        <a href="tel:+916392737953"> +91 6392737953</a> |
                        <a href="mailto:lavkumar3000@gmail.com"> lavkumar3000@gmail.com</a> |
                        <a href="https://github.com/lav5588" target="_blank" rel="noreferrer"> GitHub</a> |
                        <a href="https://leetcode.com/u/lav5588/" target="_blank" rel="noreferrer"> Leetcode</a> |
                        <a href="https://lav-kumar-yadav.onrender.com/" target="_blank" rel="noreferrer"> Portfolio</a>
                    </div>
                </div>
                {/* Passport Size Photo */}
                <img
                    src="/LAV PROFILE.jpg" // replace with actual photo path
                    alt="Lav Kumar Yadav"
                    className="w-24 h-28 object-cover rounded border"
                />
            </div>

            {/* Section: Professional Summary */}
            <section className="mt-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2 text-gray-800">Professional Summary</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Aspiring Full Stack Software Developer Trainee with hands-on experience building scalable applications using React.js, Node.js, and SQL/MongoDB. Strong understanding of full stack development, database management, and data structures. Passionate about learning, solving complex problems, and converting financial or technical concepts into practical, efficient code solutions.
                </p>
            </section>

            {/* Section: Education */}
            <section className="mt-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2 text-gray-800">Education & Qualifications</h2>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                    <li><strong>B.Tech:</strong> Computer Science and Engineering (Data Science) — ABES Engineering College, Ghaziabad (GPA: 7.6) <span className="text-gray-500">(11/2022 - 07/2026)</span></li>
                    <li><strong>Class 12th:</strong> Maharshi Arvind Vidya Mandir VMV (89.0%) — 2021</li>
                    <li><strong>Class 10th:</strong> Maharshi Arvind Vidya Mandir VMV (88.1%) — 2018</li>
                </ul>
            </section>

            {/* Section: Technical Skills */}
            <section className="mt-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2 text-gray-800">Technical Skills</h2>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li><strong>Languages & Frameworks:</strong> JavaScript, React.js, Node.js, Express.js, Next.js, Tailwind CSS, Redux Toolkit, C++</li>
                    <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
                    <li><strong>Version Control:</strong> Git, GitHub</li>
                    <li><strong>Backend:</strong> Node.js, Express.js, API Integration, Database Design</li>
                    <li><strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Shadcn</li>
                    <li><strong>Other Skills:</strong> DSA, OOP, OS, Linux, Windows</li>
                    <li><strong>Problem Solving:</strong> CodeChef 2★, 1651 highest contest rating on CodeChef, 1724 highest contest rating on LeetCode, 900+ problems solved on LeetCode, GFG, CodeChef</li>
                </ul>
            </section>

            {/* Section: Projects */}
            <section className="mt-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2 text-gray-800">Projects</h2>

                <div className="mb-4">
                    <h3 className="font-semibold text-gray-800">WriteFlow - A Modern Blogging Platform</h3>
                    <p className="text-xs text-gray-500">12/2024 - Present</p>
                    <p className="text-sm text-gray-700 mt-1">
                        Developed a modern, full-stack blogging platform using Next.js, ShadCN, and Tailwind CSS with robust authentication, Tiptap editor, pagination, and image upload integration via ImageKit.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800">Cypher Speak – A Real-Time Chat Platform</h3>
                    <p className="text-xs text-gray-500">04/2024 - 06/2024</p>
                    <p className="text-sm text-gray-700 mt-1">
                        Built a full-stack real-time chat application using React.js, Node.js, Socket.IO, and MongoDB with authentication, presence indicators, unread message tracking, and a responsive UI.
                    </p>
                </div>
            </section>

            {/* Section: Certifications */}
            <section className="mt-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2 text-gray-800">Certifications</h2>
                <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>AWS Academy Introduction to Cloud Semester I</li>
                    <li>AWS Academy Introduction to Cloud Semester II</li>
                    <li>Programming in C (Infosys Springboard)</li>
                    <li>PCAP - Programming Essentials in Python (Cisco Networking Academy)</li>
                </ul>
            </section>
        </div>
    );
}
