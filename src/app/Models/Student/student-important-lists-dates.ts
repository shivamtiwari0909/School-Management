export interface StudentImportantListsDates {
    Title:string;
    ProgramFor:string;
    ImageLink:string;
    Description:string;
    CreatedDate:string;
}
export interface AllImportantListsDates{
    Status:number;
    Message:string;
    AllImportantListsDates:StudentImportantListsDates[]
}