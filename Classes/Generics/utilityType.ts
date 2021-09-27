/* This is an example from understanding TypeScript 2021 edt. */
interface myCourse {
  title: string;
  date: Date;
  educationLevel: number;
}

function createGoal(title: string, date: Date, educationLevel: number): myCourse {
  let Goal: Partial<myCourse> = {};
  Goal.date = date;
  Goal.educationLevel = educationLevel;
  Goal.title = title;
  return Goal as myCourse;
}
