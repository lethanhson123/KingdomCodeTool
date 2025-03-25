import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BenhAnChiTiet } from './BenhAnChiTiet.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class BenhAnChiTietService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'BenhAnChiTiet_Id', 'BenhAn_Id', 'LyDoVaoVien', 'QuaTrinhBenhLy', 'TienSuBanThan', 'DiUng', 'NgayDiUng', 'MaTuy', 'NgayMaTuy', 'RuouBia', 'NgayRuouBia', 'ThuocLa', 'NgayThuocLa', 'ThuocLao', 'NgayThuocLao', 'TienSuKhac', 'NgayTienSuKhac', 'TienSuGiaDinh', 'KhamBenhToanThan', 'Mach', 'NhipTho', 'NhietDo', 'CanNang', 'HuyetApCao', 'HuyetApThap', 'KhamBenhBoPhanTonThuong', 'ThanKinh', 'TuanHoan', 'HoHap', 'TieuHoa', 'CoXuongKhop', 'TietNieu', 'SinhDuc', 'KhamBenhKhac', 'XetNghiemCLSCanLam', 'TomTatBenhAn', 'KhamBenhTienLuong', 'HuongDanDieuTri', 'QuaTrinhBenhLyVaDienBienLamSang', 'XNMau', 'XNTeBao', 'XNBLGP', 'XNXQuang', 'XNSieuAm', 'CacXNKhac', 'PhuongPhapDieuTri', 'PPTienPhauTaiU', 'PPTienPhauTaiHach', 'PPDonThuanTaiU', 'PPDonThuanTaiHach', 'PPPhauThuat', 'PPHauPhauTaiU', 'PPHauPhauTaiHach', 'PPHoaChat', 'PPSoDot', 'PPDapUng', 'PPDieuTriKhac', 'TinhTrangNguoiBenhRaVien', 'HuongDieuTriVaCheDoTiepTheo', 'SoToXQuang', 'SoToCTScanner', 'SoToSieuAm', 'SoToXetNghiem', 'SoToKhac', 'SoToHoSo', 'TVaoVien', 'NVaoVien', 'MVaoVien', 'GiaiDoanVaoVien', 'TaiBienDoPhauThau', 'TaiBienDoGayMe', 'TaiBienDoNhiemKhuan', 'TaiBienKhac', 'TRaVien', 'NRaVien', 'MRaVien', 'GiaDoanRaVien', 'ChanDoanTruocPhauThuat', 'ChanDoanSauPhauThuat', 'KhamBenhBenhChinh', 'TKhamBenh', 'NKhamBenh', 'MKhamBenh', 'GiaiDoanKhamBenh', 'KhamBenhBenhKemTheo', 'KhamBenhPhanBiet', 'TongSoNgayDieuTriSauPhauThuat', 'TongSoLanPhauThuat', 'HinhVeHoacAnh', 'MoTaTonThuong', 'LoiDanThayThuoc', 'PPDT'];

    List: BenhAnChiTiet[] | undefined;
    ListFilter: BenhAnChiTiet[] | undefined;
    FormData!: BenhAnChiTiet;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "BenhAnChiTiet";
    }
}

