import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KhamBenh } from './KhamBenh.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class KhamBenhService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'KhamBenh_Id', 'BenhNhan_Id', 'TiepNhan_Id', 'DichVu_Id', 'PhongBan_Id', 'NgayKham', 'ThoiGianKham', 'BacSiKham_Id', 'ChanDoanKhoaKham', 'ChanDoanICD_Id', 'ChanDoanPhuICD_Id', 'HuongGiaiQuyet_Id', 'GhiChu', 'SoNgayHenTaiKham', 'NhapKhoa_Id', 'ChuyenDenBenhVien_Id', 'CheDoAnUong_Id', 'CheDoChamSoc_Id', 'KhamCapCuu', 'KhamBenhLanDau_Id', 'LyDoNhapVien_Id', 'Mach', 'HuyetApThap', 'HuyetApCao', 'NhipTho', 'NhietDo', 'ChieuCao', 'CanNang', 'TrieuChungLamSang', 'DichVu_KhamBenh_Id', 'ChanDoanSoBo', 'YeuCauChiTiet_Id', 'KhamBenh_ChuyenKhoa_Id', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'ToaThuocMuaNgoai', 'ChanDoanICD', 'GiaiDoanBenh', 'TacDungPhu', 'TuanThuCuaBN', 'HuongDieuTri_Id', 'SoNgayDieuTri', 'GhiChu2', 'SoBenhAnNgoaiTru_Id', 'DieuTriDuPhong', 'DoiTuong_Id', 'BMI', 'KhoaDuDieu', 'NguoiKhoa_Id', 'NgayKhoa', 'ThoiGianKhoa', 'ChuyenKhoa_Id', 'ThoiGianNhapVienDuKien', 'TyLeMo', 'VongBung', 'TLDG_MP', 'TLDG_MT', 'TKLT_MP', 'TKLT_MT', 'SieuHienVi', 'SoiDayMat', 'TKLT_MP_Text', 'TKLT_MT_Text', 'NhanAp_MT', 'NhanAp_MP', 'NghiOm_TuNgay', 'NghiOm_DenNgay', 'TLDG_MT_Text', 'TLDG_MP_Text', 'BenhAn_ID', 'BenhManTinh_ID'];

    List: KhamBenh[] | undefined;
    ListFilter: KhamBenh[] | undefined;
    FormData!: KhamBenh;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "KhamBenh";
    }
}

