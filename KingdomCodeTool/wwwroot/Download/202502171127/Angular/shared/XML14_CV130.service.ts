import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML14_CV130 } from './XML14_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML14_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML14_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'SO_GIAYHEN_KL', 'MA_CSKCB', 'HO_TEN', 'NGAY_SINH', 'GIOI_TINH', 'DIA_CHI', 'MA_THE_BHYT', 'GT_THE_DEN', 'NGAY_VAO', 'NGAY_VAO_NOI_TRU', 'NGAY_RA', 'NGAY_HEN_KL', 'CHAN_DOAN_RV', 'MA_BENH_CHINH', 'MA_BENH_KT', 'MA_BENH_YHCT', 'MA_DOITUONG_KCB', 'MA_BAC_SI', 'MA_TTDV', 'NGAY_CT', 'DU_PHONG'];

    List: XML14_CV130[] | undefined;
    ListFilter: XML14_CV130[] | undefined;
    FormData!: XML14_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML14_CV130";
    }
}

