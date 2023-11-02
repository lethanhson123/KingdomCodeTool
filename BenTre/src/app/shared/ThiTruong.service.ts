import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ThiTruong } from 'src/app/shared/ThiTruong.model';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ThiTruongService{
    list: ThiTruong[] | undefined;
    formData!: ThiTruong;
    aPIURL: string = environment.APIURL;
    controller: string = "ThiTruong";
    constructor(public httpClient: HttpClient) {
        this.initializationFormData();
    }
    initializationFormData() {
        this.formData = {
        }
        this.list = [];
    }    
    Save(formData: ThiTruong) {
        let url = this.aPIURL + this.controller + '/Save';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    SaveAsync(formData: ThiTruong) {
        let url = this.aPIURL + this.controller + '/SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    GetAllToList() {
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Nhật Bản";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Hoa Kỳ";
        this.list?.push(this.formData);
        this.formData = {
        }
        this.formData.ID = "8a6e0804-2bd0-4672-b79d-d97027f9071a";
        this.formData.Name = "Trung Quốc";
        this.list?.push(this.formData);
        return this.list;
    }
}
