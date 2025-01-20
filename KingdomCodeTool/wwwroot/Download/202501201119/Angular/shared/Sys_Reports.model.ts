import { Base } from "./Base.model";

export class Sys_Reports extends Base{
Report_Id?: number;
Report_Code?: string;
Report_Name?: string;
Report_File?: string;
PaperSize_Id?: number;
Landscape_Orientation?: boolean;
AllowPreview?: boolean;
AllowPrintOut?: boolean;
Pull_ReportData?: boolean;
Package_Name?: string;
Procedure_Name?: string;
ReportFormNumber?: string;
ReportFormVersion?: string;
ReportFormEffectedDate?: string;
Enabled?: boolean;
Creation_Date?: Date;
Created_By?: number;
Last_Update_Date?: Date;
Last_Updated_By?: number;
Attribute1?: string;
Attribute2?: string;
Attribute3?: string;
Attribute4?: string;
Attribute5?: string;
Attribute6?: string;
ExportToDatabase?: boolean;
ExecDirectToDatabase?: boolean;
IsMultiSiteReport?: boolean;
DefaultSiteCode?: string;

}


