import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML12_CV130 } from './XML12_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML12_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML12_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'NGUOI_CHU_TRI', 'CHUC_VU', 'NGAY_HOP', 'HO_TEN', 'NGAY_SINH', 'SO_CCCD', 'NGAY_CAP_CCCD', 'NOI_CAP_CCCD', 'DIA_CHI', 'MATINH_CU_TRU', 'MAHUYEN_CU_TRU', 'MAXA_CU_TRU', 'MA_BHXH', 'MA_THE_BHYT', 'NGHE_NGHIEP', 'DIEN_THOAI', 'MA_DOI_TUONG', 'KHAM_GIAM_DINH', 'SO_BIEN_BAN', 'TYLE_TTCT_CU', 'DANG_HUONG_CHE_DO', 'NGAY_CHUNG_TU', 'SO_GIAY_GIOI_THIEU', 'NGAY_DE_NGHI', 'MA_DONVI', 'GIOI_THIEU_CUA', 'KET_QUA_KHAM', 'SO_VAN_BAN_CAN_CU', 'TYLE_TTCT_MOI', 'TONG_TYLE_TTCT', 'DANG_KHUYETTAT', 'MUC_DO_KHUYETTAT', 'DE_NGHI', 'DUOC_XACDINH', 'DU_PHONG'];

    List: XML12_CV130[] | undefined;
    ListFilter: XML12_CV130[] | undefined;
    FormData!: XML12_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML12_CV130";
    }
}

