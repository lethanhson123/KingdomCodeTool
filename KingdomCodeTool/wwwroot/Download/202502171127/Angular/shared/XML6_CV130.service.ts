import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML6_CV130 } from './XML6_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML6_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML6_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'MA_THE_BHYT', 'SO_CCCD', 'NGAY_SINH', 'GIOI_TINH', 'DIA_CHI', 'MATINH_CU_TRU', 'MAHUYEN_CU_TRU', 'MAXA_CU_TRU', 'NGAYKD_HIV', 'NOI_LAY_MAU_XN', 'NOI_XN_KD', 'NOI_BDDT_ARV', 'BDDT_ARV', 'MA_PHAC_DO_DIEU_TRI_BD', 'MA_BAC_PHAC_DO_BD', 'MA_LYDO_DTRI', 'LOAI_DTRI_LAO', 'SANG_LOC_LAO', 'PHACDO_DTRI_LAO', 'NGAYBD_DTRI_LAO', 'NGAYKT_DTRI_LAO', 'KQ_DTRI_LAO', 'MA_LYDO_XNTL_VR', 'NGAY_XN_TLVR', 'KQ_XNTL_VR', 'NGAY_KQ_XN_TLVR', 'MA_LOAI_BN', 'GIAI_DOAN_LAM_SANG', 'NHOM_DOI_TUONG', 'MA_TINH_TRANG_DK', 'LAN_XN_PCR', 'NGAY_XN_PCR', 'NGAY_KQ_XN_PCR', 'MA_KQ_XN_PCR', 'NGAY_NHAN_TT_MANG_THAI', 'NGAY_BAT_DAU_DT_CTX', 'MA_XU_TRI', 'NGAY_BAT_DAU_XU_TRI', 'NGAY_KET_THUC_XU_TRI', 'MA_PHAC_DO_DIEU_TRI', 'MA_BAC_PHAC_DO', 'SO_NGAY_CAP_THUOC_ARV', 'NGAY_CHUYEN_PHAC_DO', 'LY_DO_CHUYEN_PHAC_DO', 'MA_CSKCB', 'DU_PHONG'];

    List: XML6_CV130[] | undefined;
    ListFilter: XML6_CV130[] | undefined;
    FormData!: XML6_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML6_CV130";
    }
}

