import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSKetQua } from './CLSKetQua.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSKetQuaService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'CLSKetQua_Id', 'CLSYeuCau_Id', 'NgayThucHien', 'ThoiGianThucHien', 'NgayGioThucHien', 'GioThucHien', 'NamThucHien', 'ThangThucHien', 'NoiThucHien_Id', 'BacSiThucHien_Id', 'KyThuatVien01_Id', 'KyThuatVien02_Id', 'BacSiKetLuan_Id', 'ThucHienBenNgoai', 'BenhVienThucHien_Id', 'TenBacSiBenNgoai', 'VungKhaoSat', 'MoTa', 'MoTa_Text', 'KetLuan', 'GhiChu', 'NhomDichVu_Id', 'MaPhim', 'TiemCanQuang', 'SoPhimSuDung', 'SoThuocSuDung', 'SinhThiet', 'Clotest', 'Photo', 'Video', 'Mach', 'HuyetAp', 'NhipTho', 'NhietDo', 'ChieuCao', 'CanNang', 'BSA', 'ThietBi_Id', 'PhanLoaiKetQua_Id', 'KhoaDuLieu', 'NgayKhoaDuLieu', 'ThoiGianKhoaDuLieu', 'NguoiKhoa_Id', 'MaNguoiKhoa', 'TenNguoiKhoa', 'TrangThai', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'TinhTrangDienNao', 'GPB_AmSo', 'GPB_PhanLoaiKetQua_Id', 'GPB_PhuongPhapLayBenhPham_Id', 'GPB_SoMau', 'GPB_SoLuongMau', 'GPB_Topo_Id', 'GPB_TopoRegions_Id', 'GPB_Morpho_Id', 'GPB_Etio_Id', 'GPB_DaiThe', 'GPB_ViThe', 'GPB_Nhuom_HE', 'GPB_Nhuom_PAS', 'GPB_Nhuom_Tri', 'GPB_Nhuom_AFB', 'GPB_Nhuom_Giemsa', 'GPB_Nhuom_Other', 'GPB_HoaMienDich', 'GPB_HoaMienDichHuynhQuang', 'GPB_HoiChan', 'SoVaoVien', 'MaYTe', 'TenBenhNhan', 'NamSinh', 'GioiTinh', 'DiaChi', 'NoiChiDinh_Id', 'BacSiChiDinh', 'NgayChiDinh', 'MauThu_Id', 'ThoiGiannhan', 'Mau', 'DeNghi', 'LoaiFilm_Id', 'LoaiThuocCanQuang_Id', 'Ma', 'IDHinh', 'BacSiChiDinh_Id', 'SoPhimHu', 'LoaiPhimHu_Id', 'DoSoi', 'DoSoi_Id', 'BanKinhSoi', 'ChanDoanLamSang', 'SoDT', 'KyThuat', 'KyThuat_Text', 'SoPhimSuDung2', 'LoaiFilm_Id2', 'SoPhimSuDung3', 'LoaiFilm_Id3', 'ResistanceMarkers', 'SiteCode', 'NoiThucHien_ID_2', 'TenNoiThucHien_2', 'BacSiThucHien_ID_2', 'TenBacSiThucHien_2', 'BacSiKetLuan_ID_2', 'TenBacSiKetLuan_2', 'KyThuatVien01_ID_2', 'TenKyThuatVien01_2', 'KyThuatVien02_ID_2', 'TenKyThuatVien02_2', 'NguoiTao_ID_2', 'NguoiCapNhat_ID_2', 'DicomImageAvailable', 'DicomImageResultDate', 'DicomImageResultDateTime', 'DicomImageStudyInstanceUID', 'DicomImageOpenViewURL', 'ThoiGianNhanMau', 'ThoiGianKetQua'];

    List: CLSKetQua[] | undefined;
    ListFilter: CLSKetQua[] | undefined;
    FormData!: CLSKetQua;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSKetQua";
    }
}

