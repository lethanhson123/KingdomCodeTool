import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BenhAn } from './BenhAn.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class BenhAnService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'BenhAn_Id', 'SoBenhAn', 'SoLuuTru', 'LoaiBenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'NgayLap', 'ThoiGianLap', 'NoiLap_Id', 'NguoiLap_Id', 'BacSiDieuTriChinh_Id', 'BacSiDieuTri_Id', 'KhoaChuyenDen_Id', 'KhoaVao_Id', 'NgayVaoKhoa', 'ThoiGianVaoKhoa', 'KhoaRa_Id', 'NgayVaoVien', 'ThoiGianVaoVien', 'NgayRaVien', 'ThoiGianRaVien', 'SoNgayDieuTri', 'LyDoNhapVien_Id', 'LyDoXuatVien_Id', 'ChuyenDenBenhVien_Id', 'ChanDoanTuyenDuoi', 'ICD_TuyenDuoi', 'ChanDoanKhamBenh', 'ICD_KhamBenh', 'ChanDoanVaoKhoa', 'ICD_VaoKhoa', 'ChanDoanRaVien', 'ICD_BenhChinh', 'ICD_BenhPhu', 'KetQuaDieuTri_Id', 'MoTaTinhTrangRaVien', 'TienSuBanThan', 'TienSuGiaDinh', 'QuaTrinhBenhLy', 'Mach', 'HuyetApThap', 'HuyetApCao', 'NhipTho', 'NhietDo', 'ChieuCao', 'CanNang', 'KhamToanThan', 'TienLuong', 'KeHoachDieuTri', 'CanLamSang', 'LamSang', 'TaiBienDieuTri', 'NguyenNhanTaiBien_Id', 'GiaiPhauBenh', 'TinhTrangGiaiPhauBenh_Id', 'TrangThai', 'KhoaBenhAn', 'NgayKhoaBenhAn', 'ThoiGianKhoaBenhAn', 'NguoiKhoaBenhAn_Id', 'DaThanhToan', 'NgayThanhToan', 'ThoiGianThanhToan', 'NguoiThanhToan_Id', 'DaXacNhanDoanhThu', 'NgayXacNhanDoanhThu', 'ThoiGianXacNhanDoanhThu', 'NguoiXacNhanDoanhThu_Id', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'TuVong', 'NgayTuVong', 'ThoiGianTuVong', 'ThoiGianKhamNghiem', 'ThoiGianNhanTuThi', 'KetQuaKhamNghiem', 'GhiChu', 'ICD_TuVong_Id', 'BacSiGhiNhanTuVong_Id', 'BacSiKhamNghiem_Id', 'SoDienThoai', 'LanVaoVien', 'ChuyenVien_Id', 'ThuThuat', 'PhauThuat', 'BienChung', 'NguyenNhanTuVong_Id', 'ICD_GiaiPhauTuThi_Id', 'SoCapCuu', 'DoiTuong_Id', 'XacNhanChiPhi_Id', 'ICD_NguyenNhanXuatVien', 'SiteCode', 'Mapping_Public_Id', 'OtherSite_TongChiPhi', 'OtherSite_CoPhatSinhCLS', 'OtherSite_CoPhatSinhThuoc', 'OtherSite_TongTienHoTro', 'IsBenhAn2Khu', 'SiteCode_RaVien', 'OtherSite_XacNhanChiPhi_ID', 'IsDaChuyenKhu', 'TruongKhoa_Id', 'ThuTruong_Id', 'Export'];

    List: BenhAn[] | undefined;
    ListFilter: BenhAn[] | undefined;
    FormData!: BenhAn;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "BenhAn";
    }
}

