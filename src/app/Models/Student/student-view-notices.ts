export interface StudentViewNotices {
    NoticeID:string;
    Subject:string;
    Notice:string;
    NoticeFor:string;
    NoticeType:string;
    VideoLink:string;
    ImageLink:string;
    CreatedDate:string;
}
export interface AllViewNotices{
    Status:number;
    Message:string;
    AllViewNotices:StudentViewNotices[]
}