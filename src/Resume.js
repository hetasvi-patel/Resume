import React from 'react';

const Resume = ({ contactInfo, name, professionalSummary, coreQualifications, experience, education }) => {
    return (
        <div className="container">
            <div className="light-black-row" style={{ backgroundColor: "#333", color: "#fff", padding: "15px 0", textAlign: "center", margin: "auto", height: "55px" }}>
                <div className="header" style={{ paddingBottom: "50px", margin: "40px" }}>
                    {contactInfo}
                </div>
            </div>
            <div className="gradient-line" style={{ height: "5px", background: "linear-gradient(to right, black, green)" }}></div>
            <div>
                <h1 style={{ textAlign: "center", fontStyle: "bold", marginTop: "30px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}>{name}</h1>
            </div>
            <div className="gradient-line" style={{ height: "5px", background: "linear-gradient(to right, black, green)" }}></div>
            <div className="left-content">
                <h2>Professional Summary</h2>
            </div>
            <div className="div1" style={{ paddingLeft: "300px", display: "flex", fontSize:"10px" ,marginTop:"-60px"}}>
                <p>
                    {professionalSummary}
                </p>
            </div>
            <div className="gradient-line" style={{ height: "5px", background: "linear-gradient(to right, black, green)" }}></div>
            <div className="left-content">
                <h2>Core Qualifications</h2>
            </div>
            <div className="div1" style={{ paddingLeft: "250px", display: "flex", fontSize: "12px",marginRight:"-250px",marginTop:"-60px" }}>
                {coreQualifications.map((qualification, index) => (
                    <ul key={index}>
                        {qualification.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className="gradient-line" style={{ height: "5px", background: "linear-gradient(to right, black, green)" }}></div>
            <div className="left-content">
                <h2 style={{
                    marginBottom:'-30px'
                }}>Experience</h2>
            </div>
            {experience.map((exp, index) => (
                <div key={index} className="div4" style={{ padding: "0 130px" ,fontSize:"10px",paddingLeft: "175px",marginTop:"-10px"}}>
                    <h4><b>{exp.title}</b> {exp.duration} <br /><b>{exp.company}</b> {exp.location}</h4>
                    <p>{exp.description}</p>
                </div>
            ))}
            <div className="gradient-line" style={{ height: "5px", background: "linear-gradient(to right, black, green)" }}></div>
            <div className="left-content">
                <h2>Education</h2>
            </div>
            <div className="div4" style={{ padding: "0 130px",paddingLeft:"175px" ,marginTop:'-50px',fontSize:'12px'}}>
                <h4><b>{education.field}</b> {education.year} <br /><b>{education.institute}</b> {education.location}</h4>
            </div>
        </div>
    );
}

export default Resume;
