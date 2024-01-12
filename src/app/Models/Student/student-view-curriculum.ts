export interface StudentViewCurriculum {
    SubjectID:string;
    SubjectName:string;
    StudyMaterial:string;
    Lesson:string;
}
export interface AllViewCurriculum{
    Status:number;
    Message:string;
    AllViewCurriculum:StudentViewCurriculum[]
}