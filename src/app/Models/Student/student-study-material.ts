export interface StudentStudyMaterial {
    SubjectName:string;
    ImageLink:string;
    VideoLink:string;
    Description:string;
    PayNow:string;
}
export interface AllStudyMaterial{
    Status:number;
    Message:string;
    AllStudyMaterial:StudentStudyMaterial[]
}