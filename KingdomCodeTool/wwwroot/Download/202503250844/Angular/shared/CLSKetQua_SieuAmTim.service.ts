import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSKetQua_SieuAmTim } from './CLSKetQua_SieuAmTim.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSKetQua_SieuAmTimService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'CLSKetQua_SieuAmTim_Id', 'CLSKetQua_Id', 'SoPhieu', 'VanDMC_dA0', 'VanDMC_dA0Ngang', 'VanDMC_deoA0', 'VanDMC_Van2La', 'VanDMC_CDLaVanTruoc', 'VanDMC_DKVongVan2La', 'VanDMC_TiLe', 'VanDMP_dVongVanDMP', 'VanDMP_DMPPhai', 'VanDMP_DMPTrai', 'Van3La', 'TM_IVSd', 'TM_LVd', 'TM_PWd', 'TM_IVSs', 'TM_LVs', 'TM_PWs', 'TM_FS', 'TM_EF', 'TM_RV', 'TM_A0', 'TM_LA', 'DQV2La_Vtd', 'DQV2La_Gdnttt', 'DQV2La_EA', 'DQV2La_HepVan2La', 'DQV2La_SMoVan1', 'DQV2La_SMoVan2', 'DQV2La_HoVan2La', 'DQV2La_DoHo', 'DQDMC_Vtd', 'DQDMC_GdLVAO', 'DQDMC_HepVanDMC', 'DQDMC_SMoVan', 'DQDMC_HoVanDMC', 'DQDMC_DoHoPHT', 'DQDMC_DoHoDFO', 'DQDMC_EDTD', 'DQV3La_Vtd', 'DQV3La_GdRARV', 'DQV3La_VDongHo', 'DQV3La_PAPs', 'DQVDMP_Vtd', 'DQVDMP_GdRARV', 'DQVDMP_HoVanDMP', 'DQVDMP_VDongHo', 'DQVDMP_PAPd', 'DQVDMP_VLTVSST', 'DQVDMP_DichMangTim'];

    List: CLSKetQua_SieuAmTim[] | undefined;
    ListFilter: CLSKetQua_SieuAmTim[] | undefined;
    FormData!: CLSKetQua_SieuAmTim;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSKetQua_SieuAmTim";
    }
}

