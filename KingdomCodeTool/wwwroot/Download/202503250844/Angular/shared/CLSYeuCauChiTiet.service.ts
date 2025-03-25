import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSYeuCauChiTiet } from './CLSYeuCauChiTiet.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSYeuCauChiTietService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'YeuCauChiTiet_Id', 'CLSYeuCau_Id', 'DichVu_Id', 'PhongBan_Id', 'LoaiGia_Id', 'DonGiaDoanhThu', 'DonGiaHoTro', 'DonGiaHoTroChiTra', 'DonGiaThanhToan', 'TienTe_Id', 'TyGia', 'MoTa', 'TrangThai', 'ThucHienBenNgoai', 'DaThuTien', 'SoLuong', 'GiaTriMienGiam', 'GiaTriThatThu', 'GiaTriDaThanhToan', 'DaThanhToan_MotPhan', 'DaThanhToan_HoanTat', 'DuocPhepThucHien', 'Huy', 'NgayHuy', 'ThoiGianHuy', 'NguoiHuy_Id', 'KhongThuTien', 'LyDoKhongThuTien', 'DaXepLichMo', 'BHYTDongTien', 'DonGiaChenhLech', 'DonGiaHoTroChenhLech', 'GiaTriDaThanhToan_ChenhLech', 'GiaTriDaThanhToan_HoTroChenhLech', 'DaTaoBienBanHoiChan', 'ChuyenDucKhuon', 'DaDucKhuon', 'ThoiGianDucKhuon', 'NguoiDucKhuon_ID', 'ChuyenMoPhong', 'DaMoPhong', 'ChuyenXaTri', 'DaXaTri', 'ThoiGianXaTri', 'NguoiXaTri_ID', 'DaHoaTri', 'DaLayBenhPham', 'DichVuKemTheo', 'TyLeGiam', 'HenTaiKham_ID', 'HoaDonTamUng_Id', 'DonGia', 'DonGiaPhaiThu', 'GoidichVu_Id', 'BenhNhanGoiDichVu_Id', 'DonGiadichVuTRongGoi', 'PhanTram', 'FollowUp', 'MienPhi_GoiKham', 'DonGiaCoPhan', 'GiaTriDaThanhToan_CoPhan', 'GiaTriMienGiam_ChenhLech', 'GiaTriMienGiam_HoTroChenhLech', 'GiaTriMienGiam_CoPhan', 'ChuyenChiPhiNgoaiTru', 'DonGiaHoTro_KTC', 'DonGiaHoTroChiTra_KTC', 'DonGiaDoanhThu_ThucHien', 'DonGiaThanhToan_ThucHien', 'DonGiaChenhLech_ThucHien', 'SiteCode', 'SiteCode_ThucHien', 'Mapping_Public_Id', 'IDChuyen', 'CostCenter_Id', 'The_Id', 'LoaiKhachHang_Id', 'MienPhi_The', 'DonGiaThe', 'DonGiaTheChiTra', 'ChuyenBill', 'ThucHienDichVu', 'DonGiaHoTroGoc', 'ChuongTrinh_Id'];

    List: CLSYeuCauChiTiet[] | undefined;
    ListFilter: CLSYeuCauChiTiet[] | undefined;
    FormData!: CLSYeuCauChiTiet;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSYeuCauChiTiet";
    }
}

