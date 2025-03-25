import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HoaDon } from './HoaDon.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HoaDonService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'HoaDon_Id', 'SoHoaDon', 'LoaiHoaDon', 'TiepNhan_Id', 'BenhNhan_Id', 'NgayPhatSinh', 'ThoiGianPhatSinh', 'NoiPhatSinh_Id', 'NguoiLap_Id', 'NgayTra', 'ThoiGianTra', 'NguoiTra_Id', 'NoiTra_Id', 'NgayHoaDon', 'ThoiGianHoaDon', 'NoiThuTien_Id', 'NguoiThuTien_Id', 'GiaTriHoaDon', 'GiaTriVAT', 'GiaTriThucThu', 'HinhThucThanhToan_Id', 'TienTe_Id', 'TyGia', 'GiaTriVND', 'DaThanhToan', 'NgoaiGio', 'HuyHoaDon', 'HoanTra', 'HoaDonLienQuan_Id', 'GhiChu', 'TrangThai', 'DangKyHoaDon_Id', 'SoSerieVAT', 'SoHoaDonVAT', 'KH_MaSoThue', 'KH_TenCongTy', 'KH_DiaChi', 'KH_NguoiDaiDien', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'IDChuyen', 'Status', 'Transfer_VienPhi_Id', 'DoiTuong_Id', 'InLai', 'InLai_User_Id', 'IDChuyenHuy', 'IDChuyenHoan', 'ThuHD_BL', 'NgayKhoaGoi', 'TenCongTy', 'MaSoThue', 'DiaChiCongTy', 'NhomThanhToan_ID', 'HoaDonDoiUng', 'ChuyenChungTuID', 'ChuyenChungTuHoanID', 'ChuyenChungTuHuyID', 'ChuyenDoanhThuID', 'ChuyenDoanhThuHoanID', 'ChuyenDoanhThuHuyID'];

    List: HoaDon[] | undefined;
    ListFilter: HoaDon[] | undefined;
    FormData!: HoaDon;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HoaDon";
    }
}

