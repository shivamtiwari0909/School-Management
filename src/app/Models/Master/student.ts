export interface Student {
  StudentID:number;
  AcademicYear: string;
  RegNo: string;
  AdmissionNo:string,
  DateOfAddmission: string;
  StudentName: string;
  UserName: string;
  Password: string;
  StudentEmail: string;
  CurrentClass: string;
  Section:string,
  MobileNo: string;
  DateOfBirth: string;
  RollNo:string,
  BloodGroup:string,
  Gender: string;
  StudentAdharNo: string;
  StudentPhoto: File|null;
  MotherName: string;
  MotherQualification: string;
  MotherContactNo:string,
  FatherName:string,
  FatherQualification:string,
  FatherEmail:string,
  FatherContactNo:string,
  YearlyIncome:string,
  MotherToung:string,
  PermanentAddress:string,
  LocalAddress:string,
  Village:string,
  Post:string,
  PoliceStation:string,
  PinCode:string,
  City:string,
  State:string,
  Country:string,
  Religion:string,
  Category:string,
  MedicalHistory:string,
  Cast:string,
  LastInstituteName:string,
  LastClassAttended:string,
  ResultOfLastClass:string,
  LastInstituteAffiliatedTo:string,
  TransferCertificateNo:string,
  TransfeCertificateDate:string,
  StudentBankAccountNo:string,
  BankIFSC:string,
  MonthlyFeesDiscountAmount:string,
  GovermentIDName:string,
  AdharCardPhoto:File|null,
  BirthCertificatePhoto:File|null,
  TransferCertificatePhoto:File|null,
  LastClassMarkSheetPhoto:File|null
}
