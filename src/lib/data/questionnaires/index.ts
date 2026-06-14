import { jobApplication } from "@/lib/data/questionnaires/job-application";
import { websiteConsulting } from "@/lib/data/questionnaires/website-consulting";

export const questionaires = {
  "job-application": jobApplication,
  "website-consulting": websiteConsulting,
};

export const questionaireKeys = Object.keys(questionaires);
