import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ChucVu } from 'src/app/shared/ChucVu.model';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ChucVuService{
    list: ChucVu[] | undefined;
    formData!: ChucVu;
    aPIURL: string = environment.APIURL;
    controller: string = "ChucVu";
    constructor(public httpClient: HttpClient) {
        this.initializationFormData();
    }
    initializationFormData() {
        this.formData = {
        }
    }    
    Save(formData: ChucVu) {
        let url = this.aPIURL + this.controller + '/Save';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    SaveAsync(formData: ChucVu) {
        let url = this.aPIURL + this.controller + '/SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    GetAllToList() {
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Trưởng phòng";
        this.list?.push(this.formData);
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Phó phòng";
        this.list?.push(this.formData);
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Chuyên viên";
        this.list?.push(this.formData);
        return this.list;
    }
}
