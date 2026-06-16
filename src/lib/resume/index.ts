import { aiDevResume } from "./ai_dev_resume";
import { gameDevResume } from "./game_dev_resume";
import { mainResume } from "./main_resume";
import type { ResumeDocument, ResumeOptions, ResumeSeo } from "./types";

export type {
  Address,
  Education,
  ResumeDocument,
  ResumeOptions,
  ResumeSeo,
  WorkExperience,
} from "./types";

export const resumeDocuments: Array<ResumeDocument> = [
  mainResume,
  aiDevResume,
  gameDevResume,
];

/** Default resume id and canonical `/resume` redirect target. */
export const DEFAULT_RESUME_ID = mainResume.id;

export const defaultResumeHref = `/resume/${DEFAULT_RESUME_ID}` as const;

/** Backward-compatible export: primary (software) resume content + metadata. */
export const resume: ResumeDocument = mainResume;

export function getResumeById(id: string): ResumeDocument | undefined {
  return resumeDocuments.find((r) => r.id === id);
}

export function getAllResumeIds(): Array<string> {
  return resumeDocuments.map((r) => r.id).filter((item) => item !== null);
}
