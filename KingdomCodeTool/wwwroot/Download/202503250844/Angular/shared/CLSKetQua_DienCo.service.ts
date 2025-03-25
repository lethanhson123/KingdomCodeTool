import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CLSKetQua_DienCo } from './CLSKetQua_DienCo.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CLSKetQua_DienCoService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'CLSKetQua_DienCo_Id', 'CLSKetQua_Id', 'MauBenh_Id', 'Col_Int_1', 'Col_Int_2', 'Col_Int_3', 'Col_Int_4', 'Col_Int_5', 'Col_Int_6', 'Col_Int_7', 'Col_Int_8', 'Col_Int_9', 'Col_Int_10', 'Col_Text_1', 'Col_Text_2', 'Col_Text_3', 'Col_Text_4', 'Col_Text_5', 'Col_Text_6', 'Col_Text_7', 'Col_Text_8', 'Col_Text_9', 'Col_Text_10', 'Col_DateTime_1', 'Col_DateTime_2', 'Col_DateTime_3', 'Col_DateTime_4', 'Col_DateTime_5', 'Col_DateTime_6', 'Col_DateTime_7', 'Col_DateTime_8', 'Col_DateTime_9', 'Col_DateTime_10', 'HienThi', 'Ma_MauBenh_Column', 'Idx', 'Col_Decimal_1', 'Col_Decimal_2', 'Col_Decimal_3', 'Col_Decimal_4', 'Col_Decimal_5', 'Col_Decimal_6', 'Col_Decimal_7', 'Col_Decimal_8', 'Col_Decimal_9', 'Col_Decimal_10', 'KetQuaMauBenh_Id', 'TemplateFileName'];

    List: CLSKetQua_DienCo[] | undefined;
    ListFilter: CLSKetQua_DienCo[] | undefined;
    FormData!: CLSKetQua_DienCo;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CLSKetQua_DienCo";
    }
}

