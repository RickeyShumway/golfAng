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
