export interface StudentExamSchedule {
    ExamID:string;
    Title:string;
    AdmitCardComment:string;
    MarksheetComment:string;
    ResultDate:string;
    FinancialYear:string;
    ExamName:string;
    ExamScheduleCount:string;

    Date:string;
    SubjectName:string;
    StartTime:string;
    EndTime:string;
}
export interface AllExam{
    Status:number;
    Message:string;
    AllExam:StudentExamSchedule[]
}
export interface AllExamSchedule{
    Status:number;
    Message:string;
    AllExamSchedule:StudentExamSchedule[]
}