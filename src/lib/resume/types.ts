export type WorkExperience = {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  skills: Array<string>;
  bulletpoints: Array<string>;
};

export type Address = {
  city: string;
  state: string;
};

export type Education = {
  school: string;
  from: string;
  to: string;
  name: string;
};

export type ResumeOptions = {
  name: string;
  email: string;
  bio: string;
  tagline: string;
  address: Address;
  education: Education;
  workExperience: Array<WorkExperience>;
  links: Array<string>;
  skills: Array<string>;
};

export type ResumeSeo = {
  title: string;
  description: string;
};

/** Full resume document: URL id and SEO live alongside resume content. */
export type ResumeDocument = ResumeOptions & {
  id: string;
  seo: ResumeSeo;
  /** Short label for cross-links (e.g. resume footer). */
  navLabel: string;
  /** Public path under / for PDF download, e.g. "Resume.pdf" */
  pdfFilename?: string;
};
