import { Base } from "./Base.model";

export class Sys_Parameters extends Base{
Parameter_Id?: number;
Parameter_Code?: string;
Parameter_Type?: string;
Parameter_Name?: string;
Language_Id?: string;
DataType_Id?: number;
Max_Length?: number;
Default_Value_Type_Id?: number;
Default_Value?: string;
Enabled?: boolean;
Is_Report_Parameter?: boolean;
Is_Database_Parameter?: boolean;
Is_Common_Formula?: boolean;
Is_Common_Parameter?: boolean;
Is_Common_MethodParameter?: boolean;
Idx?: number;
Lov_Procedure?: string;
ComboData_Procedure?: string;
DataGroup?: string;
Creation_Date?: Date;
Created_By?: number;
Last_Update_Date?: Date;
Last_Updated_By?: number;
Attribute1?: string;
Attribute2?: string;
Attribute3?: string;
Attribute4?: string;
Attribute5?: string;

}


