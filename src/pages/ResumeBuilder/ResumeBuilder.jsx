import React from "react";
import ResumeBuilderFunc from "../../components/ResumeBuilder/ResumeBuilder";
import './ResumeBuilder.css'
import React, { useState } from 'react';


export default function MainResumeBuilder(){
    const [formData, setFormData] = useState({
        fullName: '',
        aboutMe: '',
        phone: '',
        email: '',
        workExperience: [
        {
            companyName: '',
            role: '',
            timeFrame: '',
        }
        ],
        education: [
        {
            institution: '',
            fieldOfStudy: '',
            timeFrame: '',
        }
        ]
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };
    
    const handleWorkExperienceChange = (index, e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        workExperience: prevState.workExperience.map((exp, i) => i === index ? { ...exp, [name]: value } : exp)
        }));
    };
    
    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        education: prevState.education.map((edu, i) => i === index ? { ...edu, [name]: value } : edu)
        }));
    };
    
    const handleAddWorkExperience = () => {
        setFormData(prevState => ({
        ...prevState,
        workExperience: [...prevState.workExperience, { companyName: '', role: '', timeFrame: '' }]
        }));
    };
    
    const handleAddEducation = () => {
        setFormData(prevState => ({
        ...prevState,
        education: [...prevState.education, { institution: '', fieldOfStudy: '', timeFrame: '' }]
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return(
        <ResumeBuilderFunc />
    )
    
}