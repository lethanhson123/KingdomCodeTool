import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KhamBenh_SinhHieu } from './KhamBenh_SinhHieu.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class KhamBenh_SinhHieuService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'BenhNhan_Id', 'Mach', 'HuyetApThap', 'HuyetApCao', 'NhipTho', 'NhietDo', 'ChieuCao', 'CanNang', 'BMI'];

    List: KhamBenh_SinhHieu[] | undefined;
    ListFilter: KhamBenh_SinhHieu[] | undefined;
    FormData!: KhamBenh_SinhHieu;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "KhamBenh_SinhHieu";
    }
}

