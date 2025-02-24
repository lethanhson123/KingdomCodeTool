import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KhamBenh_VaoVien } from './KhamBenh_VaoVien.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class KhamBenh_VaoVienService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'KhamBenhVaoVien_Id', 'SoPhieu', 'TiepNhan_Id', 'KhamBenh_Id', 'BenhNhan_Id', 'NguoiLienHe', 'DienThoaiLienHe', 'NoiLamViec', 'ChanDoanNoiGioiThieu', 'NgayKham', 'ThoiGianKham', 'LyDoVaoVien', 'QuaTrinhBenhLy', 'TienSuBanThan', 'TienSuGiaDinh', 'KhamXetToanThan', 'KhamXetCacBoPhan', 'KhamXetKQLS', 'ChanDoanVao', 'ICDKhamXet_Id', 'DaXuLy', 'NgayRa', 'ThoiGianRa', 'NhapKhoa_Id', 'ChuyenVien_Id', 'ChuY', 'Mach', 'NhietDo', 'HuyetApCao', 'HuyetApThap', 'NhipTho', 'CanNang', 'ChieuCao', 'BacSi_Id', 'XuTruKhamBenh_Id', 'CapCuu', 'NgayTaiNan', 'ThoiGianTaiNan', 'NoiTaiNan_TinhThanh_Id', 'NoiTaiNan_QuanHuyen_Id', 'NoiTaiNan_PhuongXa_Id', 'NoiTaiNan_DiaChi', 'DiaDiemTaiNan_Id', 'BoPhanBiThuong_Id', 'MucDo_Id', 'DienBienSauTN_Id', 'XuTriSauTN_Id', 'NguyenNhan_Id', 'NguyenNhanChiTiet_Id', 'ICD_NguyenNhan', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'SoBenhAn', 'DiaDiemTaiNan', 'SoCapCuu_Co', 'SoCapCuu_Khong', 'PhuongTienDuaDen', 'PhuongTienSuDung', 'OTo', 'TauHoa', 'XeGanMay', 'XeTuChe', 'TuGayTaiNan', 'Khac', 'DoiMuBH_Co', 'DoiMuBH_Khong', 'DoiMuBH_KhongRo', 'GaiQuaiMuBH_Co', 'GaiQuaiMuBH_Khong', 'GaiQuaiMuBH_KhongRo', 'MuBHVo_Co', 'MuBHVo_Khong', 'MuBHVo_KhongRo', 'MuBH_TenHang', 'MuBH_TenHang_KhongRo', 'Ruou_Co', 'Ruou_Khong', 'Ruou_KhongRo', 'CamQuan_Co', 'CamQuan_Khong', 'NongDoCon_Mau', 'NongDoCon_Mau_KhongDo', 'NongDoCon_HoiTho', 'NongDoCon_HoiTho_KhongDo', 'ChanThuongNao_Co', 'ChanThuongNao_Khong', 'Glassgow', 'ChanThuongCotSongCo_Co', 'ChanThuongCotSongCo_Khong', 'ChanThuongHamMat', 'ChanThuongChi', 'ChanThuongNguc', 'DaChanThuong', 'NhapVien_Co', 'NhapVien_Khong', 'MoCapCuu_Co', 'MoCapCuu_Khong', 'TuVong_TruocBV', 'TuVong_TrongBV', 'XinVe', 'NoiChuyenTuyen', 'KhongChuyen', 'BenhAnNoiTru_ID', 'NoiChuyen_ID', 'LoaiTaiNan_ID'];

    List: KhamBenh_VaoVien[] | undefined;
    ListFilter: KhamBenh_VaoVien[] | undefined;
    FormData!: KhamBenh_VaoVien;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "KhamBenh_VaoVien";
    }
}

