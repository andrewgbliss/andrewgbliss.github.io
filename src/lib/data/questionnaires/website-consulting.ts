import { Questionnaire } from "./types";

export const websiteConsulting: Questionnaire = {
  slug: "website-consulting",
  name: "Website Consulting",
  sections: [
    {
      title: "Website Services",
      questions: [
        {
          id: "domain-registration",
          type: "radio",
          label: "Would you like assistance with domain registration?",
          options: ["Yes", "No"],
        },
        {
          id: "hosting-setup",
          type: "radio",
          label: "Would you like help setting up hosting for your website?",
          options: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Website Pages",
      questions: [
        {
          id: "homepage",
          type: "radio",
          label: "Do you need a homepage for your website?",
          options: ["Yes", "No"],
        },
        {
          id: "about-page",
          type: "radio",
          label: "Do you need an about page to tell your brand's story?",
          options: ["Yes", "No"],
        },
        {
          id: "contact-page",
          type: "radio",
          label:
            "Do you need a contact form to allow visitors to get in touch?",
          options: ["Yes", "No"],
        },
        {
          id: "terms-page",
          type: "radio",
          label: "Do you need a terms and conditions / privacy policy page?",
          options: ["Yes", "No"],
        },
        {
          id: "product-service-pages",
          type: "radio",
          label: "Would you like pages to showcase your products or services?",
          options: ["Yes", "No"],
        },
        {
          id: "custom-page",
          type: "radio",
          label:
            "Do you need any custom pages for your website (e.g., FAQ, Blog, Payment Processing, etc.)?",
          options: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Additional Features",
      questions: [
        {
          id: "google-analytics",
          type: "radio",
          label:
            "Would you like Google Analytics integrated into your website?",
          options: ["Yes", "No"],
        },
        {
          id: "seo-integration",
          type: "radio",
          label: "Do you want your website optimized for search engines (SEO)?",
          options: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Business Needs and Goals",
      questions: [
        {
          id: "website-purpose",
          type: "text",
          label:
            "What is the primary purpose of your website (e.g., showcase products, generate leads, etc.)?",
        },
        {
          id: "target-audience",
          type: "text",
          label: "Who is your target audience for the website?",
        },
        {
          id: "future-expansion",
          type: "radio",
          label:
            "Are you planning to expand your website in the future (e.g., adding more pages or e-commerce)?",
          options: ["Yes", "No"],
        },
      ],
    },
  ],
};
