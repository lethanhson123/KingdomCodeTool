import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SanPham } from 'src/app/shared/SanPham.model';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class SanPhamService{
    list: SanPham[] | undefined;
    formData!: SanPham;
    aPIURL: string = environment.APIURL;
    controller: string = "SanPham";
    constructor(public httpClient: HttpClient) {
        this.initializationFormData();
    }
    initializationFormData() {
        this.formData = {
        }
        this.list = [];
    }    
    Save(formData: SanPham) {
        let url = this.aPIURL + this.controller + '/Save';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    SaveAsync(formData: SanPham) {
        let url = this.aPIURL + this.controller + '/SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    GetAllToList() {
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Ba ba";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Bao tử cá";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Cá bò";
        this.list?.push(this.formData);        
        return this.list;
    }
}
