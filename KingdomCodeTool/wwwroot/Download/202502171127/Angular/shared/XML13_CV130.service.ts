import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML13_CV130 } from './XML13_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML13_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML13_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'SO_HOSO', 'SO_CHUYENTUYEN', 'GIAY_CHUYEN_TUYEN', 'MA_CSKCB', 'MA_NOI_DI', 'MA_NOI_DEN', 'HO_TEN', 'NGAY_SINH', 'GIOI_TINH', 'MA_QUOCTICH', 'MA_DANTOC', 'MA_NGHE_NGHIEP', 'DIA_CHI', 'MA_THE_BHYT', 'GT_THE_DEN', 'NGAY_VAO', 'NGAY_VAO_NOI_TRU', 'NGAY_RA', 'DAU_HIEU_LS', 'CHAN_DOAN_RV', 'QT_BENHLY', 'TOMTAT_KQ', 'PP_DIEUTRI', 'MA_BENH_CHINH', 'MA_BENH_KT', 'MA_BENH_YHCT', 'PP_DIEU_TRI', 'MA_LOAI_RV', 'MA_LYDO_CT', 'HUONG_DIEU_TRI', 'PHUONGTIEN_VC', 'HOTEN_NGUOI_HT', 'CHUCDANH_NGUOI_HT', 'MA_BAC_SI', 'MA_TTDV', 'DU_PHONG'];

    List: XML13_CV130[] | undefined;
    ListFilter: XML13_CV130[] | undefined;
    FormData!: XML13_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML13_CV130";
    }
}

