import { NhanVien } from "./NhanVien.model";
import { TieuChi } from "./TieuChi.model";

export class BienBanKiemTraGiamSatCoSoDongGoi{
    ID?: string;
    HoTen?: string;    
    CoSoDongGoi?: string;    
    DiaChi?: string;    
    SanPham?: string;      
    ThiTruong?: string;    
    MaSoCoSoDongGoi?: string;    
    DienTich?: number;    
    CongSuat?: number;    
    DoanKiemTra?: NhanVien[];    
    TieuChi?: TieuChi[];    
    DanhGiaChung?: boolean;
    KetLuan?: string;    
    NoiDungKhongDat?: string;    
    ThoiGianKhacPhuc?: Date;    
    ThoiGianHoanThanhKhacPhuc?: Date;    
}


