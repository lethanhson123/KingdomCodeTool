import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML3_CV130 } from './XML3_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML3_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML3_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'STT', 'MA_DICH_VU', 'MA_PTTT_QT', 'MA_VAT_TU', 'MA_NHOM', 'GOI_VTYT', 'TEN_VAT_TU', 'TEN_DICH_VU', 'MA_XANG_DAU', 'DON_VI_TINH', 'PHAM_VI', 'SO_LUONG', 'DON_GIA_BV', 'DON_GIA_BH', 'TT_THAU', 'TYLE_TT_DV', 'TYLE_TT_BH', 'THANH_TIEN_BV', 'THANH_TIEN_BH', 'T_TRANTT', 'MUC_HUONG', 'T_NGUONKHAC_NSNN', 'T_NGUONKHAC_VTNN', 'T_NGUONKHAC_VTTN', 'T_NGUONKHAC_CL', 'T_NGUONKHAC', 'T_BNTT', 'T_BNCCT', 'T_BHTT', 'MA_KHOA', 'MA_GIUONG', 'MA_BAC_SI', 'NGUOI_THUC_HIEN', 'MA_BENH', 'MA_BENH_YHCT', 'NGAY_YL', 'NGAY_TH_YL', 'NGAY_KQ', 'MA_PTTT', 'VET_THUONG_TP', 'PP_VO_CAM', 'VI_TRI_TH_DVKT', 'MA_MAY', 'MA_HIEU_SP', 'TAI_SU_DUNG', 'DU_PHONG'];

    List: XML3_CV130[] | undefined;
    ListFilter: XML3_CV130[] | undefined;
    FormData!: XML3_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML3_CV130";
    }
}

