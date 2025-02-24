import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML1_CV130 } from './XML1_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML1_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML1_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'STT', 'MA_BN', 'HO_TEN', 'SO_CCCD', 'NGAY_SINH', 'GIOI_TINH', 'NHOM_MAU', 'MA_QUOCTICH', 'MA_DANTOC', 'MA_NGHE_NGHIEP', 'DIA_CHI', 'MATINH_CU_TRU', 'MAHUYEN_CU_TRU', 'MAXA_CU_TRU', 'DIEN_THOAI', 'MA_THE_BHYT', 'MA_DKBD', 'GT_THE_TU', 'GT_THE_DEN', 'NGAY_MIEN_CCT', 'LY_DO_VV', 'LY_DO_VNT', 'MA_LY_DO_VNT', 'CHAN_DOAN_VAO', 'CHAN_DOAN_RV', 'MA_BENH_CHINH', 'MA_BENH_KT', 'MA_BENH_YHCT', 'MA_PTTT_QT', 'MA_DOITUONG_KCB', 'MA_NOI_DI', 'MA_NOI_DEN', 'MA_TAI_NAN', 'NGAY_VAO', 'NGAY_VAO_NOI_TRU', 'NGAY_RA', 'GIAY_CHUYEN_TUYEN', 'SO_NGAY_DTRI', 'PP_DIEU_TRI', 'KET_QUA_DTRI', 'MA_LOAI_RV', 'GHI_CHU', 'NGAY_TTOAN', 'T_THUOC', 'T_VTYT', 'T_TONGCHI_BV', 'T_TONGCHI_BH', 'T_BNTT', 'T_BNCCT', 'T_BHTT', 'T_NGUONKHAC', 'T_BHTT_GDV', 'NAM_QT', 'THANG_QT', 'MA_LOAI_KCB', 'MA_KHOA', 'MA_CSKCB', 'MA_KHUVUC', 'CAN_NANG', 'CAN_NANG_CON', 'NAM_NAM_LIEN_TUC', 'NGAY_TAI_KHAM', 'MA_HSBA', 'MA_TTDV', 'DU_PHONG'];

    List: XML1_CV130[] | undefined;
    ListFilter: XML1_CV130[] | undefined;
    FormData!: XML1_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML1_CV130";
    }
}

