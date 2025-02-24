import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ChungTuChiTiet } from './ChungTuChiTiet.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ChungTuChiTietService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ChungTuChiTiet_Id', 'ChungTu_Id', 'Duoc_Id', 'SoLoNhap_Id', 'SoKiemSoat', 'SoVisa', 'DonViTinh_Id', 'SoLuongYeuCau', 'SoLuongThucTe', 'SoLuongDaXuat', 'TienTe_Id', 'TyGia', 'DonGiaMua', 'DonGiaBan', 'DonGiaVon', 'DonGiaThanhToan', 'SoQuyen', 'SoHoaDonVAT', 'TyLeVAT', 'GiaTriVAT', 'MienPhi', 'LyDoMienPhi_Id', 'SoChungTuKeToan', 'SoChungTuTienMat', 'TrangThai', 'DaPhatSinhPhieuXuat', 'DaPhatSinhPhieuHoanTra', 'KhuyenMai', 'DonDatHang_Id', 'GhiChuChiTiet', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'NguonHang_Id', 'DonGiaVonVAT', 'ThanhTienMua', 'ThanhTienVon', 'IsTachLo', 'DonViTinhBanDau_Id', 'SoLuongBanDau', 'GoiThau_Id', 'DonGiaThau', 'MaThongTu', 'MaQuyetDinh', 'SoNamHopDong'];

    List: ChungTuChiTiet[] | undefined;
    ListFilter: ChungTuChiTiet[] | undefined;
    FormData!: ChungTuChiTiet;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ChungTuChiTiet";
    }
}

