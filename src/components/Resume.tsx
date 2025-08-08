
import { Dot } from "lucide-react";
import { data } from "../constant/data"
import { useRef, useState, useEffect } from "react";




const Resume = () => {
    return (
        <div style={{
            margin: "1rem 0.5rem",
        }}>
            <Heading />

            <SectionHeading
                heading="Professional Summary"
            />
            <ProffessionsalSummary />


            <SectionHeading
                heading="Education & Qualifications"
            />
            <EducationsAndQualifications />

            <SectionHeading
                heading="Technical Skills"
            />
            <TechnicalSkills />

            <SectionHeading
                heading="Projects"
            />
            <Projects />

            <SectionHeading
                heading="Certifications"
            />
            <Certifications />
        </div>
    )
}

const Projects = () => {
    return (
        <div>

            {
                data.projects.map((Project, index) => (
                    <div key={index}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            <h2>
                                <span>{Project.title}</span>
                                <a href={Project.link}>[LINK]</a>
                            </h2>
                            <p>{Project.time}</p>
                        </div>
                        <div>
                            {Project.points.map((point, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        alignItems: "start"
                                    }}
                                >
                                    <Dot style={{
                                        color: "blue",
                                        fontSize: "24px"
                                    }}
                                    />
                                    <p>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

const Certifications = () => {
    return (
        <div>
            {
                data.certifications.map((cert, index) => (
                    <div key={index}
                        style={{
                            display: "flex",
                            alignItems: "start"
                        }}
                    >
                        <Dot style={{
                            color: "blue",
                            fontSize: "24px"
                        }}
                        />
                        <div>
                            <span>{cert.title}</span>
                            <a href={cert.link} style={{
                                marginLeft: "4px"
                            }}>[LINK]</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const TechnicalSkills = () => {
    return (
        <div>
            {data.technicalSkills.map((skill, index) => (
                <div key={index}
                    style={{
                        display: "flex"
                    }}
                >
                    <Dot style={{
                        color: "blue",
                        fontSize: "24px"
                    }}
                    />
                    <div>
                        <span style={{
                            fontWeight: "bold"
                        }}>{skill.title} : </span>
                        <span>{skill.skills}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}


const EducationsAndQualifications = () => {
    return (
        <div style={{
        }}>
            {
                data.educationAndQualification.map((edu, index) => (
                    <div key={index} style={{
                        display: "flex",
                        alignItems: "start"
                    }}>
                        <Dot style={{
                            color: "blue",
                        }}
                        />
                        <div style={{
                            width: "100%",
                        }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                                <p >
                                    <span style={{
                                        fontWeight: "bold"
                                    }}>{edu.degree} </span>
                                    <span>{edu.branch} :</span>
                                </p>
                                <p>{edu.time}</p>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                                <p>{edu.institute}</p>
                                <p>{edu.result}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const ProffessionsalSummary = () => {
    return (
        <p>{data.proffesionalSummary}</p>
    )
}

const SectionHeading = ({ heading }: { heading: string }) => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const [lineWidth, setLineWidth] = useState("0px");

    useEffect(() => {
        if (headingRef.current) {
            const headingWidth = headingRef.current.offsetWidth;
            setLineWidth(`calc(100% - ${headingWidth + 2}px)`);
        }
    }, [heading]);

    return (
        <div style={{ position: "relative" }}>
            <h2 ref={headingRef} style={{ display: "inline-block", margin: 0 }}>
                {heading}
            </h2>
            <div
                style={{
                    height: "1px",
                    width: lineWidth,
                    backgroundColor: "black",
                    position: "absolute",
                    right: "0",
                    bottom: "6px"
                }}
            ></div>
        </div>
    );
};



const Heading = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            gap: "16px"
        }} >
            <div>
                <h2 >{data.name}</h2>
                <p >{data.location}</p>
                <div style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
                >
                    {
                        data.socialMedia.map((item, index) => (
                            <div key={index}

                            >
                                <a
                                    href={item.link}

                                    style={{
                                        color: "rgb(70, 69, 150)"
                                    }}
                                >{item.title} </a>
                                {index !== data.socialMedia.length - 1 && "| "}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <img
                    src={data.ProfilePic}
                    alt="Profile Picture"
                    style={{
                        height: "7rem",
                        width: "6rem",
                        objectFit: "cover",
                        borderRadius: "4px"
                    }}
                />
            </div>
        </div>
    )
}


export default Resume