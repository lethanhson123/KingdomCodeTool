import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML2_CV130 } from './XML2_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML2_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML2_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'STT', 'MA_THUOC', 'MA_PP_CHEBIEN', 'MA_CSKCB_THUOC', 'MA_NHOM', 'TEN_THUOC', 'DON_VI_TINH', 'HAM_LUONG', 'DUONG_DUNG', 'DANG_BAO_CHE', 'LIEU_DUNG', 'CACH_DUNG', 'SO_DANG_KY', 'TT_THAU', 'PHAM_VI', 'TYLE_TT_BH', 'SO_LUONG', 'DON_GIA', 'THANH_TIEN_BV', 'THANH_TIEN_BH', 'T_NGUONKHAC_NSNN', 'T_NGUONKHAC_VTNN', 'T_NGUONKHAC_VTTN', 'T_NGUONKHAC_CL', 'T_NGUONKHAC', 'MUC_HUONG', 'T_BHTT', 'T_BNCCT', 'T_BNTT', 'MA_KHOA', 'MA_BAC_SI', 'MA_DICH_VU', 'NGAY_YL', 'NGAY_TH_YL', 'MA_PTTT', 'NGUON_CTRA', 'VET_THUONG_TP', 'DU_PHONG'];

    List: XML2_CV130[] | undefined;
    ListFilter: XML2_CV130[] | undefined;
    FormData!: XML2_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML2_CV130";
    }
}

