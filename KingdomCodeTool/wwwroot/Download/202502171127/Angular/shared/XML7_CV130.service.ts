import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { XML7_CV130 } from './XML7_CV130.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class XML7_CV130Service extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'XML7_CV130_Id', 'BenhAn_Id', 'TiepNhan_Id', 'BenhNhan_Id', 'XacNhanChiPhi_Id', 'MA_LK', 'SO_LUU_TRU', 'MA_YTE', 'MA_KHOA_RV', 'NGAY_VAO', 'NGAY_RA', 'MA_DINH_CHI_THAI', 'NGUYENNHAN_DINHCHI', 'THOIGIAN_DINHCHI', 'TUOI_THAI', 'CHAN_DOAN_RV', 'PP_DIEUTRI', 'GHI_CHU', 'MA_TTDV', 'MA_BS', 'TEN_BS', 'NGAY_CT', 'MA_CHA', 'MA_ME', 'MA_THE_TAM', 'HO_TEN_CHA', 'HO_TEN_ME', 'SO_NGAY_NGHI', 'NGOAITRU_TUNGAY', 'NGOAITRU_DENNGAY'];

    List: XML7_CV130[] | undefined;
    ListFilter: XML7_CV130[] | undefined;
    FormData!: XML7_CV130;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "XML7_CV130";
    }
}

