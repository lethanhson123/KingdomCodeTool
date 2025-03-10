import { Base } from "./Base.model";

export class HRLichCongTacChiTiet extends Base{
ID?: number;
ParentID?: number;
ParentName?: string;
CreatedDate?: Date;
CreatedMembershipID?: number;
LastUpdatedDate?: Date;
LastUpdatedMembershipID?: number;
RowVersion?: number;
SortOrder?: number;
Active?: boolean;
TypeName?: string;
Name?: string;
Code?: string;
Note?: string;
Display?: string;
FileName?: string;
Description?: string;
HTMLContent?: string;
DanhMucNgonNguID?: number;
DanhMucUngDungID?: number;
DanhMucNgonNguName?: string;
DanhMucUngDungName?: string;
Year?: number;
Month?: number;
Day?: number;
BatDau?: Date;
KetThuc?: Date;
ChamCong?: number;
DanhMucChamCongID?: number;
DanhMucChamCongName?: string;
DanhMucPhuCapID?: number;
DanhMucPhuCapName?: string;

}


