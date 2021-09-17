export interface Tee {
    colorId: number;
    color: string;
    yards: number;
    hcp: number;
};
export interface Hole {
    tees: Array<Tee>;
};
export interface CourseInfo {
    name: string;
    holes: Array<Hole>;
};
export interface Course {
  name: string;
  id: number;
  image: string;

}
export interface Courses {
  courses: Array<Course>;
}
