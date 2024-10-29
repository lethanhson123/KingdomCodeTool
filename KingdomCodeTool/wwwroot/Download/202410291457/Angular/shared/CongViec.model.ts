import { Base } from "./Base.model";

export class CongViec extends Base{
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
DanhMucPhongBanYeuCauID?: number;
DanhMucPhongBanYeuCauName?: string;
DanhMucPhongBanGiaiQuyetID?: number;
DanhMucPhongBanGiaiQuyetName?: string;
ThanhVienYeuCauID?: number;
ThanhVienYeuCauName?: string;
ThanhVienYeuCauDienThoai?: string;
ThanhVienYeuCauEmail?: string;
ThanhVienGiaiQuyetID?: number;
ThanhVienGiaiQuyetName?: string;
ThanhVienGiaiQuyetDienThoai?: string;
ThanhVienGiaiQuyetEmail?: string;
DanhMucTinhTrangID?: number;
DanhMucTinhTrangName?: string;
NgayYeuCau?: Date;
NgayGiaiQuyet?: Date;
NgayHoanThanh?: Date;

}


