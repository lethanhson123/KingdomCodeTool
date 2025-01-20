import { Base } from "./Base.model";

export class T_FK_Xref extends Base{
ID?: number;
ConstraintName?: string;
MasterTable?: string;
MasterColumn?: string;
ChildTable?: string;
ChildColumn?: string;
FKOrder?: number;

}


