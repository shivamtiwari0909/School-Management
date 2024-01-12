export interface StudentDailyNotes {
    ClassID:number;
    ClassName:string;
    ShortName:string;
    PrimarySubject:string;
    OptionalSubject:string;
    Status:number;
    Message:string
}

export interface AllClass{
    Status:number;
    Message:string;
    AllClass: StudentDailyNotes[];
}

export interface StudentDailyNotesSection {
    SectionID:number;
    Name:string;
    NickName:string;
    TeacherId:string;
    TeacherName:string;
    Teacher:string;
    ClassID:string;
    Status:number;
    Message:string
}

export interface AllSection{
    Status:number;
    Message:string;
    AllSection: StudentDailyNotesSection[];
}