export interface StudentVideoTutorial {
    TeacherName:string;
    SubjectName:string;
    VideoImage:string;
    VideoLink:string;
    Description:string;
    Date:string;
}
export interface AllVideoTutorial{
    Status:number;
    Message:string;
    AllVideoTutorial:StudentVideoTutorial[]
}