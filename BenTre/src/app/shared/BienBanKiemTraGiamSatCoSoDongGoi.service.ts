import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BienBanKiemTraGiamSatCoSoDongGoi } from 'src/app/shared/BienBanKiemTraGiamSatCoSoDongGoi.model';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class BienBanKiemTraGiamSatCoSoDongGoiService {
    list: BienBanKiemTraGiamSatCoSoDongGoi[] | undefined;
    formData!: BienBanKiemTraGiamSatCoSoDongGoi;
    aPIURL: string = environment.APIURL;
    controller: string = "BienBanKiemTraGiamSatCoSoDongGoi";
    constructor(public httpClient: HttpClient) {
        this.initializationFormData();
    }
    initializationFormData() {
        this.formData = {            
        }
    }
    Save(formData: BienBanKiemTraGiamSatCoSoDongGoi) {
        // let url = this.aPIURL + this.controller + '/Save';
        // const formUpload: FormData = new FormData();
        // formUpload.append('data', JSON.stringify(formData));
        // return this.httpClient.post(url, formUpload);
        console.log(formData);
        return formData;
    }
    SaveAsync(formData: BienBanKiemTraGiamSatCoSoDongGoi) {
        let url = this.aPIURL + this.controller + '/SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
}
