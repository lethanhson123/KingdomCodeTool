import { Base } from "./Base.model";

export class HRNhanVien extends Base{
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
DanhMucTinhThanhID?: number;
DanhMucTinhThanhName?: string;
DanhMucQuanHuyenID?: number;
DanhMucQuanHuyenName?: string;
DanhMucXaPhuongID?: number;
DanhMucXaPhuongName?: string;
CCCD?: string;
Email?: string;
DiaChiThuongTru?: string;
DiaChi?: string;
DienThoai?: string;
IsNghiViec?: boolean;

}


