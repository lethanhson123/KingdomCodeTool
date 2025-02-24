import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToaThuoc } from './ToaThuoc.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ToaThuocService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ToaThuoc_Id', 'KhamBenh_ToaThuoc_Id', 'SoThuTuToa', 'KhamBenh_Id', 'Duoc_Id', 'SoLuong', 'SoNgay', 'SoLanTrenNgay', 'SoLuongTrenLan', 'SoLuong_BuoiSang', 'SoLuong_BuoiTrua', 'SoLuong_BuoiChieu', 'SoLuong_BuoiToi', 'DuongDung_Id', 'DonGiaDoanhThu', 'DonGiaHoTro', 'DonGiaHoTroChiTra', 'DonGiaThanhToan', 'TienTe_Id', 'TyGia', 'HuyToaThuoc', 'GhiChu', 'TrangThai', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'idx', 'LoaiGia_Id', 'NguonHang_id', 'GiaTriMienGiam', 'GiaTriThatThu', 'GiaTriDaThanhToan', 'DaThanhToan_MotPhan', 'DaThanhToan_HoanTat', 'PhatSinhHoaDon', 'DonGiaChenhLech', 'DonGiaHoTroChenhLech', 'GiaTriDaThanhToan_ChenhLech', 'GiaTriDaThanhToan_HoTroChenhLech'];

    List: ToaThuoc[] | undefined;
    ListFilter: ToaThuoc[] | undefined;
    FormData!: ToaThuoc;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ToaThuoc";
    }
}

