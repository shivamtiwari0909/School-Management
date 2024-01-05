export interface Class {
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
    AllClass: Class[];
}

export interface Section{
    SectionID:number,
    ClassID:number,
    Name:string,
    NickName:string,
    Teacher:string,
    TeacherName:string,
    Status:number;
    Message:string
}

export interface AllSection{
    Status:number,
    Message:string,
    AllSection:Section[]
}