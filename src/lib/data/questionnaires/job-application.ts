import { Questionnaire } from "./types";

export const jobApplication: Questionnaire = {
  slug: "job-application",
  name: "Job Application",
  sections: [
    {
      title: "Personal Information",
      questions: [
        {
          id: "name",
          type: "text",
          label: "What is your full name?",
          required: true,
        },
        { id: "age", type: "text", label: "What is your age?" },
        {
          id: "gender",
          type: "radio",
          label: "What is your gender?",
          options: ["Male", "Female", "Non-binary", "Prefer not to say"],
        },
      ],
    },
    {
      title: "Education",
      questions: [
        {
          id: "education-level",
          type: "radio",
          label: "What is your highest level of education?",
          options: ["High School", "Bachelor's", "Master's", "PhD", "Other"],
        },
        {
          id: "field-of-study",
          type: "text",
          label: "What is your field of study?",
        },
        {
          id: "school",
          type: "text",
          label: "What is the name of your school/university?",
        },
      ],
    },
    {
      title: "Work Experience",
      questions: [
        {
          id: "current-job",
          type: "text",
          label: "What is your current job title?",
        },
        {
          id: "years-experience",
          type: "text",
          label: "How many years of work experience do you have?",
        },
        {
          id: "job-description",
          type: "textarea",
          label: "Briefly describe your current job responsibilities:",
        },
      ],
    },
    {
      title: "Skills and Interests",
      questions: [
        {
          id: "skills",
          type: "textarea",
          label: "List your top skills (separated by commas):",
        },
        {
          id: "hobbies",
          type: "textarea",
          label: "What are your hobbies and interests?",
        },
        {
          id: "languages",
          type: "text",
          label: "What languages do you speak?",
        },
      ],
    },
    {
      title: "Future Goals",
      questions: [
        {
          id: "career-goals",
          type: "textarea",
          label: "What are your career goals for the next 5 years?",
        },
        { id: "dream-job", type: "text", label: "What is your dream job?" },
        {
          id: "improvement",
          type: "textarea",
          label: "In what areas would you like to improve yourself?",
        },
      ],
    },
  ],
};
