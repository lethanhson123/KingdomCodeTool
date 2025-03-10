import { Base } from "./Base.model";

export class HRNhanVienHopDong extends Base{
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
DanhMucHopDongID?: number;
DanhMucHopDongName?: string;
DanhMucBacLuongID?: number;
DanhMucBacLuongName?: string;
DanhMucChucDanhID?: number;
DanhMucChucDanhName?: string;
DanhMucChucVuID?: number;
DanhMucChucVuName?: string;
NgayBatDau?: Date;
NgayKetThuc?: Date;
HeSo?: number;

}


