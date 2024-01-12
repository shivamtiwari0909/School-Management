export interface StudentMonthlyCalender {
    UserID:number;
    EventID:number;
    EventTypeID:number;
    EventName:string;
    StartDate:string;
    EndDate:string;
    StartTime:string;
    EndTime:string;
    Description:string;
    Status:0;
    Message:string;
}

export interface StudentCalender {
    id:number;
    title:string;
    start:string;
    end:string;
    display:string;
}

export interface AllMonthlyCalender {
    Status: number;
    Message: string;
    GetAllCalender: StudentCalender[];    
}

export interface StudentEventType {
    EventTypeID:number;
    EventTypeName:string;
    Status:0;
    Message:string;
}

export interface GetAllEventType {
    Status: number;
    Message: string;
    GetAllEventType: StudentEventType[];    
}