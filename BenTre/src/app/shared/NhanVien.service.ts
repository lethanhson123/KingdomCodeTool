import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NhanVien } from 'src/app/shared/NhanVien.model';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class NhanVienService{
    list: NhanVien[] | undefined;
    formData!: NhanVien;
    aPIURL: string = environment.APIURL;
    controller: string = "NhanVien";
    constructor(public httpClient: HttpClient) {
        this.initializationFormData();
    }
    initializationFormData() {
        this.formData = {
        }
        this.list = [];
    }    
    Save(formData: NhanVien) {
        let url = this.aPIURL + this.controller + '/Save';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    SaveAsync(formData: NhanVien) {
        let url = this.aPIURL + this.controller + '/SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    GetAllToList() {
        for(let i=0;i<3;i++){
            this.formData = {
            }
            this.list?.push(this.formData);
        }      
        return this.list;
    }
}
