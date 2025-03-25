import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSYeuCau } from './CLSYeuCau.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSYeuCauService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'CLSYeuCau_Id', 'SoPhieuYeuCau', 'NgayYeuCau', 'ThoiGianYeuCau', 'NamYeuCau', 'ThangYeuCau', 'NoiYeuCau_Id', 'BacSiChiDinh_Id', 'NoiThucHien_Id', 'BenhNhan_Id', 'TiepNhan_Id', 'BenhAn_Id', 'LuuTru_Id', 'NhomDichVu_Id', 'ThucHienBenNgoai', 'YeuCauBenNgoai', 'DonViBenNgoai_Id', 'TenBacSiBenNgoai', 'TiemCanQuang', 'SinhThiet', 'Clotest', 'TrieuChung', 'KetQuaXNKhac', 'DaiThe', 'ViThe', 'ChanDoan', 'GhiChu', 'Khan', 'ThanhToanTruoc', 'SoDichVuYeuCau', 'SoDichVuDongTien', 'DuocPhepThucHien', 'HuyYeuCau', 'KhoaDuLieu', 'NgayKhoaDuLieu', 'ThoiGianKhoaDuLieu', 'NguoiKhoa_Id', 'MaNguoiKhoa', 'TenNguoiKhoa', 'TrangThai', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'DichVu_KhamBenh_Id', 'KhamBenh_Id', 'BacSiBenNgoai_Id', 'NoiDungChiTiet', 'NoiThucHienThayDoi_Id', 'NgayGioYeuCau', 'GioYeuCau', 'DaNhanBenhPham', 'BenhPham', 'NgayNhanBenhPham', 'ThoiGianNhanBenhPham', 'NguoiNhanBenhPham_Id', 'MaNguoiNhapBenhPham', 'TenNguoiNhapBenhPham', 'SoThuTu', 'DoiTuong_Id', 'DaLayMau', 'HopDong_BenhNhan_Id', 'HinhThucThanhToan_Id', 'HopDong_Id', 'TrangThai_HangDoi', 'ThuTuYeuCau', 'GoiDichVu_Id', 'BenhNhanGoiDichVu_Id', 'The_Id', 'LoaiKhachHang_Id', 'ThoiGianLichHen', 'LichHen_ID', 'BNKhongDenBV', 'BarCodeID', 'DicomImageAvailable', 'DicomImageResultDate', 'DicomImageResultDateTime', 'DicomImageStudyInstanceUID', 'DicomImageOpenViewURL', 'DangKyMau_Id', 'NhapKetQua', 'ThoiGianKetQua', 'ThietBi_Id', 'NguoiTraKQ_Id'];

    List: CLSYeuCau[] | undefined;
    ListFilter: CLSYeuCau[] | undefined;
    FormData!: CLSYeuCau;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSYeuCau";
    }
}

