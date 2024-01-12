export interface StudentClassRoutine {
    SubjectName:string;
    TeacherName:string;
    Day:number;
    StartingTime:string;
    EndingTime:string;
    Period:string;
}

export interface AllClassRoutine{
    Status:number;
    Message:string;
    AllClassRoutine:StudentClassRoutine[]
}