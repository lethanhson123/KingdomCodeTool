import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HoaDonChiTiet } from './HoaDonChiTiet.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HoaDonChiTietService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'HoaDonChiTiet_Id', 'HoaDon_Id', 'DichVu_Id', 'PhongBan_Id', 'LoaiGia_Id', 'TienTe_Id', 'TyGia', 'DichVu_ThayDoi_Id', 'PhongBan_ThayDoi_Id', 'TyLeVAT', 'GiaTriVAT', 'MaSoThue', 'SoChungTuKeToan', 'YeuCauChiTiet_Id', 'NoiDungThu', 'SoLuong', 'DonGiaDoanhThu', 'DonGiaHoTro', 'DonGiaHoTroChiTra', 'DonGiaThanhToan', 'GiaTriThucThu', 'DaHoanTra', 'TrangThai', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'ToaThuoc_Id', 'BenhAnPhauThuat_VTYT_ID', 'ChungTuChiTiet_Id', 'IDRef', 'Loai_IDRef', 'NoiDung_Id', 'LoaiNoiDung', 'ChungTuXuatBN_Id', 'DonGiaChenhLech', 'DonGiaHoTroChenhLech', 'GiaTriThucThu_ChenhLech', 'GiaTriThucThu_HoTroChenhLech', 'CLSGhiNhanHoaChat_Id', 'TyLeThatThu', 'GiaTriThatThu', 'BenhAnNgoaiTru_ToaThuoc_Id', 'DonGiaCoPhan', 'GiaTriThucThu_CoPhan', 'GiaTriMienGiam_ChenhLech', 'GiaTriMienGiam_HoTroChenhLech', 'GiaTriMienGiam_CoPhan'];

    List: HoaDonChiTiet[] | undefined;
    ListFilter: HoaDonChiTiet[] | undefined;
    FormData!: HoaDonChiTiet;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HoaDonChiTiet";
    }
}

