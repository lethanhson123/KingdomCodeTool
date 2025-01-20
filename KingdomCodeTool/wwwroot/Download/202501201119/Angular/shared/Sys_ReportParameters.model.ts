import { Base } from "./Base.model";

export class Sys_ReportParameters extends Base{
ReportParameter_Id?: number;
Report_Id?: number;
Parameter_Id?: number;
Idx?: number;
Private_Parameter_Code?: boolean;
Report_Parameter_Code?: string;
Private_Parameter_Name?: boolean;
Parameter_Name?: string;
Language_Id?: string;
Crlf?: boolean;
Max_Length?: number;
Default_Value_Type_Id?: number;
Default_Value?: string;
Is_Report_Parameter?: boolean;
Is_Database_Parameter?: boolean;
ReadOnly?: boolean;
Enabled?: boolean;
IsNotNull?: boolean;
ControlType_Id?: number;
Multiline?: boolean;
Width?: number;
Height?: number;
Private_DataGroup?: boolean;
DataGroup?: string;
SaveDefaultValue?: boolean;
PrimaryParameterIdx?: number;
RelationParameterIdx?: number;
PrimaryFieldName?: string;
RelationFieldName?: string;
ReQueryData?: boolean;
Filter_Value_Type_Id?: number;
Filter_Value?: string;
LovEnabled?: boolean;
LovPrivate_DataGroup?: boolean;
LovDataGroup?: string;
LovUseSystemFunction?: boolean;
Visibled?: boolean;
Attribute1?: string;
Attribute2?: string;
Attribute3?: string;
Attribute4?: string;
Attribute5?: string;
SetReportFileBySelectedValue?: boolean;
ComboBox_ReturnValue?: boolean;
ComboBox_ReturnText?: boolean;

}


