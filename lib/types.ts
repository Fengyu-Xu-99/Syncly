export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface CourseSection {
  title: string;
  content: string;
  summary: string;
  quiz: QuizQuestion[];
}

export interface Course {
  course_title: string;
  learner_goal: string;
  sections: CourseSection[];
}