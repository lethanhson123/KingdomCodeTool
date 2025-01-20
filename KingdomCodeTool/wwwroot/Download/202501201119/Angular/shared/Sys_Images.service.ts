import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sys_Images } from './Sys_Images.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class Sys_ImagesService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'Image_Id', 'User_Id', 'User_Image', 'Menu_Id', 'MenuBar_Icon', 'MenuBar_Icon_File', 'LeftMenu_SmallIcon', 'LeftMenu_SmallIcon_File', 'LeftMenu_MediumIcon', 'LeftMenu_MediumIcon_File', 'LeftMenu_LargeIcon', 'LeftMenu_LargeIcon_File'];

    List: Sys_Images[] | undefined;
    ListFilter: Sys_Images[] | undefined;
    FormData!: Sys_Images;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "Sys_Images";
    }
}

