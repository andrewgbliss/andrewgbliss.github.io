export type Question = {
  id: string;
  type: "email" | "text" | "number" | "textarea" | "radio";
  label: string;
  options?: string[];
  required?: boolean;
};

export type QuestionnaireSection = {
  title: string;
  questions: Question[];
};

export type Questionnaire = {
  slug: string;
  name: string;
  sections: QuestionnaireSection[];
};
