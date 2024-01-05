export interface Subject {
    SubjectID:number;
    SubjectName:string;
    SubjectCode:string;
    SequenceNo:number;
    SubjectType:string;
    CreatedBy:string;
    Status:0;
    Message:string;
    isPrimaryChecked?:boolean;
    isOptionalChecked?:boolean;
}

export interface AllSubjects {
    Status: number;
    Message: string;
    AllSubjects: Subject[];
    
  }