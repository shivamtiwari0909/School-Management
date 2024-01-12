export interface StudentSubjectTeachers {
    TeacherID:number;
    Name:string;
    Type:string;
    Phone:string;
    MeetingId:string;
    Speciality:string;
    Photo:string;
}

export interface AllTeacherName{
    Status:number;
    Message:string;
    AllTeacherName:StudentSubjectTeachers[]
}
