import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSKetQua_Images } from './CLSKetQua_Images.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSKetQua_ImagesService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Images_Id', 'CLSKetQua_Id', 'File_Name_Origin', 'File_Name', 'Idx', 'TenHinh', 'MoTaHinh', 'TamNgung', 'NgayTao', 'NguoiTao_Id', 'NgayCapNhat', 'NguoiCapNhat_Id', 'ChonInMacDinh'];

    List: CLSKetQua_Images[] | undefined;
    ListFilter: CLSKetQua_Images[] | undefined;
    FormData!: CLSKetQua_Images;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSKetQua_Images";
    }
}

