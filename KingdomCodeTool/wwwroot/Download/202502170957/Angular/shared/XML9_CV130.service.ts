import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML9_CV130 } from './XML9_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML9_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML9_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'MA_BHXH_NND', 'MA_THE_NND', 'HO_TEN_NND', 'NGAYSINH_NND', 'MA_DANTOC_NND', 'SO_CCCD_NND', 'NGAYCAP_CCCD_NND', 'NOICAP_CCCD_NND', 'NOI_CU_TRU_NND', 'MA_QUOCTICH', 'MATINH_CU_TRU', 'MAHUYEN_CU_TRU', 'MAXA_CU_TRU', 'HO_TEN_CHA', 'MA_THE_TAM', 'HO_TEN_CON', 'GIOI_TINH_CON', 'SO_CON', 'LAN_SINH', 'SO_CON_SONG', 'CAN_NANG_CON', 'NGAY_SINH_CON', 'NOI_SINH_CON', 'TINH_TRANG_CON', 'SINHCON_PHAUTHUAT', 'SINHCON_DUOI32TUAN', 'GHI_CHU', 'NGUOI_DO_DE', 'NGUOI_GHI_PHIEU', 'NGAY_CT', 'SO', 'QUYEN_SO', 'MA_TTDV'];

    List: XML9_CV130[] | undefined;
    ListFilter: XML9_CV130[] | undefined;
    FormData!: XML9_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML9_CV130";
    }
}

