import { Base } from "./Base.model";

export class DM_BenhVien extends Base{
BenhVien_Id?: number;
MaBenhVien?: string;
TenBenhVien?: string;
TenBenhVien_En?: string;
TenBenhVien_Ru?: string;
DiaChi?: string;
Hang_Id?: number;
Loai_Id?: number;
Tuyen_Id?: number;
CapQuanLy_Id?: number;
TinhThanhPho_Id?: number;
TamNgung?: boolean;
NgayTao?: Date;
NguoiTao_Id?: number;
NgayCapNhat?: Date;
NguoiCapNhat_Id?: number;
SiteCode?: string;
Mapping_Public_Id?: number;

}


