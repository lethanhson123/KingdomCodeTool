import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NoiTru_LuuTruChiTiet } from './NoiTru_LuuTruChiTiet.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NoiTru_LuuTruChiTietService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'LuuTruChiTiet_Id', 'LuuTru_Id', 'PhongBan_Id', 'GiuongBenh_Id', 'PhongBenh_Id', 'NgayVao', 'ThoiGianVao', 'ThoiGianTinhLuuTru', 'LyDo_Id', 'NgayRa', 'ThoiGianRa', 'DonGiaPhaiThu', 'DonGia', 'TyLeVAT', 'GiaTriVAT', 'TienTe_Id', 'Tygia', 'LoaiGia_Id', 'GiuongBenhChuyenDen_Id', 'BaoPhong', 'KhongTinhTien', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'LuuTruChiTiet_Prev', 'LuuTruChiTiet_Current', 'DoiTuong_Id', 'LuuTruChiTiet_Id_Last', 'SiteCode', 'Mapping_Public_Id'];

    List: NoiTru_LuuTruChiTiet[] | undefined;
    ListFilter: NoiTru_LuuTruChiTiet[] | undefined;
    FormData!: NoiTru_LuuTruChiTiet;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NoiTru_LuuTruChiTiet";
    }
}

