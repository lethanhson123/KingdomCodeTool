import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ChungTu } from './ChungTu.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ChungTuService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ChungTu_Id', 'MaChungTu', 'SoChungTu', 'NgayChungTu', 'LoaiChungTu', 'MucDichChungTu_Id', 'KhoXuat_Id', 'NguoiGiao_Id', 'NguoiGiao', 'KhoNhap_Id', 'NguoiNhan_Id', 'NguoiNhan', 'NguoiKiemTra_Id', 'NguoiKiemTra', 'NguoiDuyet_Id', 'NguoiDuyet', 'KeToanTruong_Id', 'KeToanTruong', 'ThuKho_Id', 'ThuKho', 'SoSeri', 'SoHoaDon', 'DienGiai', 'GiaTri', 'GiaTriThanhToan', 'TyLeVat', 'GiaTriVat', 'ThueSuat', 'GiaTriThue', 'TyleChietKhau', 'GiaTriChietKhau', 'TienTe_Id', 'TyGia', 'SoChungTuGoc', 'NgayChungTuGoc', 'NhaCungCap_Id', 'HinhThucThanhToan_Id', 'NguonDuoc_Id', 'ChungTuLienQuan_Id', 'KhamBenh_Id', 'ToaThuocNoiTru_Id', 'BenhAn_Id', 'DaNhanThuoc', 'NguoiNhap_Id', 'NgayNhap', 'TrangThai', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'PhieuLinh_Id', 'DienGiaiNghiepVuPhatSinh', 'DonViGiao_Id', 'TyLeVATNhapKhau', 'GiaTriVATNhapKhau', 'SoSeriNuocNgoai', 'SoHoaDonNuocNgoai', 'NgayHoaDonNuocNgoai', 'KhoSuDung_Id', 'LoaiVatTu_Id', 'BenhNhan_Id', 'TenBenhNhan', 'GioiTinh', 'NamSinh', 'DiaChi', 'SoDienThoai', 'BacSiGioiThieu_Id', 'DoiTuong_Id', 'IDChuyen', 'ChungTuKeToan', 'Status', 'Transfer_VienPhi_Id', 'PhongBan_Id', 'BacSi_Id', 'TKNo', 'TKCo', 'MaChungTuRef', 'LoaiChungTuRef', 'PhieuLinhCanTru_Id', 'KhoThucHien_Id', 'KhoDoiUng_Id', 'Menu_LoaiDuoc_ID', 'NguoiSuDungMay_Id', 'GoiThau_Id', 'XuatThuocBANgoaiTru', 'NgayGioChungTu', 'NoiDaKham', 'ChuyenChungTuID', 'ChuyenDoanhThuID', 'THANHTOAN_TIMEOUT', 'DATHANHTOAN', 'NGUOITHANHTOAN_ID', 'NGAYTHANHTOAN', 'THOIGIANTHANHTOAN'];

    List: ChungTu[] | undefined;
    ListFilter: ChungTu[] | undefined;
    FormData!: ChungTu;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ChungTu";
    }
}

