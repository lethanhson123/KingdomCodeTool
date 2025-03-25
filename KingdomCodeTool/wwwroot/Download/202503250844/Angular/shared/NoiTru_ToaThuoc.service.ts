import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NoiTru_ToaThuoc } from './NoiTru_ToaThuoc.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NoiTru_ToaThuocService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ToaThuoc_Id', 'SoThuTuToa', 'KhamBenh_Id', 'Duoc_Id', 'SoLuong', 'SoNgay', 'SoLanTrenNgay', 'SoLuongTrenLan', 'SoLuong_BuoiSang', 'SoLuong_BuoiTrua', 'SoLuong_BuoiChieu', 'SoLuong_BuoiToi', 'DuongDung_Id', 'BangGia_Id', 'LoaiGia_Id', 'TienTe_Id', 'TyGia', 'DonGiaDoanhThu', 'DonGiaHoTro', 'DonGiaHoTroChiTra', 'DonGiaThanhToan', 'TyLeVAT', 'GiaTriVAT', 'GhiChu', 'NguonDuoc_Id', 'NguonHang_Id', 'PhieuLinh_Id', 'ChungTu_Id', 'DonGiaDoanhThuTam', 'DonGiaHoTroTam', 'DonGiaThanhToanTam', 'SoTienThucTe', 'SoTienMienGiam', 'SoTienThatThu', 'SoTienThanhToan', 'SoTienDaThanhToan', 'MienPhi', 'TrangThai', 'NguonLayThuoc', 'HuyToaThuoc', 'MuaNgoai', 'PhatThuocTaiQuay', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'KhoPhat_Id', 'TinhTien', 'YeuCau', 'PhoiHop', 'PhaChe', 'DonGiaChenhLech', 'DonGiaHoTroChenhLech', 'GiaTriDaThanhToan_ChenhLech', 'GiaTriDaThanhToan_HoTroChenhLech', 'ChuongTrinh_Id'];

    List: NoiTru_ToaThuoc[] | undefined;
    ListFilter: NoiTru_ToaThuoc[] | undefined;
    FormData!: NoiTru_ToaThuoc;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NoiTru_ToaThuoc";
    }
}

