import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DonVi } from 'src/app/shared/DonVi.model';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class DonViService{
    list: DonVi[] | undefined;
    formData!: DonVi;
    aPIURL: string = environment.APIURL;
    controller: string = "DonVi";
    constructor(public httpClient: HttpClient) {
        this.initializationFormData();
    }
    initializationFormData() {
        this.formData = {
        }
        this.list = [];
    }    

    Save(formData: DonVi) {
        let url = this.aPIURL + this.controller + '/Save';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    SaveAsync(formData: DonVi) {
        let url = this.aPIURL + this.controller + '/SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    GetAllToList() {
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Chi cục Quản lý chất lượng Nông lâm sản và Thủy sản";
        this.list?.push(this.formData);
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Chi cục bảo vệ thực vật";
        this.list?.push(this.formData);
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Chi cục thủy sản";
        this.list?.push(this.formData);
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Chi cục Chăn nuôi và Thú y";
        this.list?.push(this.formData);
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Ủy Ban Nhân Dân cấp Xã";
        this.list?.push(this.formData);
        return this.list;
    }
}
