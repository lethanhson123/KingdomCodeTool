import { Base } from "./Base.model";

export class ToaThuoc extends Base{
ToaThuoc_Id?: number;
KhamBenh_ToaThuoc_Id?: number;
SoThuTuToa?: string;
KhamBenh_Id?: number;
Duoc_Id?: number;
SoLuong?: string;
SoNgay?: number;
SoLanTrenNgay?: number;
SoLuongTrenLan?: number;
SoLuong_BuoiSang?: number;
SoLuong_BuoiTrua?: number;
SoLuong_BuoiChieu?: number;
SoLuong_BuoiToi?: number;
DuongDung_Id?: number;
DonGiaDoanhThu?: string;
DonGiaHoTro?: string;
DonGiaHoTroChiTra?: string;
DonGiaThanhToan?: string;
TienTe_Id?: string;
TyGia?: string;
HuyToaThuoc?: boolean;
GhiChu?: string;
TrangThai?: string;
NgayTao?: Date;
NguoiTao_Id?: number;
NgayCapNhat?: Date;
NguoiCapNhat_Id?: number;
idx?: number;
LoaiGia_Id?: number;
NguonHang_id?: number;
GiaTriMienGiam?: string;
GiaTriThatThu?: string;
GiaTriDaThanhToan?: string;
DaThanhToan_MotPhan?: boolean;
DaThanhToan_HoanTat?: boolean;
PhatSinhHoaDon?: boolean;
DonGiaChenhLech?: number;
DonGiaHoTroChenhLech?: number;
GiaTriDaThanhToan_ChenhLech?: number;
GiaTriDaThanhToan_HoTroChenhLech?: number;

}


