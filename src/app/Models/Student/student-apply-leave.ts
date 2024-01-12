export interface StudentApplyLeave {
    LeaveID:number;
    StudentID:number;
    Day:string;
    FromDate:string;
    ToDate:string;
    Subject:string;
    Reason:string;
    Status:0;
    Message:string;
    LeaveStatus:boolean,
    NumberofDays:number,
    AppliedDate:string,
    TeacharName:string,
    Description:string
}

export interface AllApplyLeave {
    Status: number;
    Message: string;
    AllApplyLeave: StudentApplyLeave[];    
}
