import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KhamBenh_VaoVien_SanKhoa } from './KhamBenh_VaoVien_SanKhoa.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class KhamBenh_VaoVien_SanKhoaService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'KhamBenh_VaoVien_SanKhoa_ID', 'KhamBenhVaoVien_Id', 'BuouCo', 'TieuDuong', 'TimMach', 'Lao', 'ChuKy', 'SoNgayHinhKinh', 'ThongKinh', 'SoLuongKinh', 'KinhLanDau', 'NamLayChong', 'Vong', 'Thuoc', 'BaoCaosu', 'Khac', 'BenhPhuKhoa', 'VMCNgay', 'LyDo', 'BenhVien', 'PhauThuatKhac', 'LanCoThai', 'LanSanh', 'LanSay', 'DHKN', 'SoConSong', 'ConNangNhat', 'NamSinhconNhoNhat', 'TaiBien', 'NgayKyKinhChot', 'NgayDuSanh', 'KhamThaiTai', 'NgayGioCDKhongro', 'NgayGioCD', 'ThanhBung', 'VMC', 'TCCao', 'TCHinhDang', 'TimThai', 'AmDao', 'TangSanhMon', 'CoTC', 'Oi', 'MauNuocOi', 'MoTaNuocOi', 'NgayGioOi', 'NgoiThai', 'KieuThe', 'DoLot', 'KhungChau', 'ChuanDoanSoBo'];

    List: KhamBenh_VaoVien_SanKhoa[] | undefined;
    ListFilter: KhamBenh_VaoVien_SanKhoa[] | undefined;
    FormData!: KhamBenh_VaoVien_SanKhoa;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "KhamBenh_VaoVien_SanKhoa";
    }
}

