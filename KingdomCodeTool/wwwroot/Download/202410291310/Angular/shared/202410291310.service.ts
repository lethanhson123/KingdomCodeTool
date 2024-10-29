import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { 202410291310 } from 'src/app/shared/202410291310.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class 202410291310Service extends BaseService{
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "202410291310";
    }
}

