export interface StudentHomeWork {
    TeacherName:string;
    SubjectName:string;
    ImageLink:string;
    VideoLink:string;
    Description:string;
    ApprovedDate:string;
}
export interface AllHomeWork{
    Status:number;
    Message:string;
    AllHomeWork:StudentHomeWork[]
}
