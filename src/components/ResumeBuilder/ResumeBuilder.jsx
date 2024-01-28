import React from "react";

export default function ResumeBuilderFunc(){
    return(<div>
    <h2>Resume Builder</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
        
        <label htmlFor="aboutMe">About Me</label>
        <textarea id="aboutMe" name="aboutMe" value={formData.aboutMe} onChange={handleChange} />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <h3>Work Experience</h3>
        {formData.workExperience.map((exp, index) => (
        <div key={index}>
            <label htmlFor={`companyName${index}`}>Company Name</label>
            <input type="text" id={`companyName${index}`} name="companyName" value={exp.companyName} onChange={(e) => handleWorkExperienceChange(index, e)} />
            
            <label htmlFor={`role${index}`}>Role</label>
            <input type="text" id={`role${index}`} name="role" value={exp.role} onChange={(e) => handleWorkExperienceChange(index, e)} />
            
            <label htmlFor={`timeFrame${index}`}>Time Frame</label>
            <input type="text" id={`timeFrame${index}`} name="timeFrame" value={exp.timeFrame} onChange={(e) => handleWorkExperienceChange(index, e)} />
        </div>
        ))}
        <button type="button" onClick={handleAddWorkExperience}>Add Work Experience</button>

        <h3>Education</h3>
        {formData.education.map((edu, index) => (
        <div key={index}>
            <label htmlFor={`institution${index}`}>Institution</label>
            <input type="text" id={`institution${index}`} name="institution" value={edu.institution} onChange={(e) => handleEducationChange(index, e)} />
            
            <label htmlFor={`fieldOfStudy${index}`}>Field of Study</label>
            <input type="text" id={`fieldOfStudy${index}`} name="fieldOfStudy" value={edu.fieldOfStudy} onChange={(e) => handleEducationChange(index, e)} />
            
            <label htmlFor={`timeFrameEdu${index}`}>Time Frame</label>
            <input type="text" id={`timeFrameEdu${index}`} name="timeFrame" value={edu.timeFrame} onChange={(e) => handleEducationChange(index, e)} />
        </div>
        ))}
        <button type="button" onClick={handleAddEducation}>Add Education</button>

        <button type="submit">Generate Resume</button>
    </form>
    </div>
);
}