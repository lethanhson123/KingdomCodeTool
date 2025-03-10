import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HRChamCong } from './HRChamCong.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class HRChamCongService extends BaseService{
    DisplayColumns001: string[] = ['Save', 'STT', 'ID', 'ParentID', 'ParentName', 'CreatedDate', 'CreatedMembershipID', 'LastUpdatedDate', 'LastUpdatedMembershipID', 'RowVersion', 'SortOrder', 'Active', 'TypeName', 'Name', 'Code', 'Note', 'Display', 'FileName', 'Description', 'HTMLContent', 'DanhMucNgonNguID', 'DanhMucUngDungID', 'DanhMucNgonNguName', 'DanhMucUngDungName', 'NgayGhiNhan', 'Year', 'Month', 'Day', 'ChamCong', 'Ngay01', 'Name01', 'Code01', 'ChamCong01', 'Ngay02', 'Name02', 'Code02', 'ChamCong02', 'Ngay03', 'Name03', 'Code03', 'ChamCong03', 'Ngay04', 'Name04', 'Code04', 'ChamCong04', 'Ngay05', 'Name05', 'Code05', 'ChamCong05', 'Ngay06', 'Name06', 'Code06', 'ChamCong06', 'Ngay07', 'Name07', 'Code07', 'ChamCong07', 'Ngay08', 'Name08', 'Code08', 'ChamCong08', 'Ngay09', 'Name09', 'Code09', 'ChamCong09', 'Ngay10', 'Name10', 'Code10', 'ChamCong10', 'Ngay11', 'Name11', 'Code11', 'ChamCong11', 'Ngay12', 'Name12', 'Code12', 'ChamCong12', 'Ngay13', 'Name13', 'Code13', 'ChamCong13', 'Ngay14', 'Name14', 'Code14', 'Ngay15', 'Name15', 'Code15', 'ChamCong15', 'Ngay16', 'Name16', 'Code16', 'ChamCong16', 'Ngay17', 'Name17', 'Code17', 'ChamCong17', 'Ngay18', 'Name18', 'Code18', 'ChamCong18', 'Ngay19', 'Name19', 'Code19', 'ChamCong19', 'Ngay20', 'Name20', 'Code20', 'ChamCong20', 'Ngay21', 'Name21', 'Code21', 'ChamCong21', 'Ngay22', 'Name22', 'Code22', 'ChamCong22', 'Ngay23', 'Name23', 'Code23', 'ChamCong23', 'Ngay24', 'Name24', 'Code24', 'ChamCong24', 'Ngay25', 'Name25', 'Code25', 'ChamCong25', 'Ngay26', 'Name26', 'Code26', 'ChamCong26', 'Ngay27', 'Name27', 'Code27', 'ChamCong27', 'Ngay28', 'Name28', 'Code28', 'ChamCong28', 'Ngay29', 'Name29', 'Code29', 'ChamCong29', 'Ngay30', 'Name30', 'Code30', 'ChamCong30', 'Ngay31', 'Name31', 'Code31', 'ChamCong31', 'Ngay32', 'Name32', 'Code32', 'ChamCong32', 'Ngay33', 'Name33', 'Code33', 'ChamCong33', 'Ngay34', 'Name34', 'Code34', 'ChamCong34', 'Ngay35', 'Name35', 'Code35', 'ChamCong35'];

    List: HRChamCong[] | undefined;
    ListFilter: HRChamCong[] | undefined;
    FormData!: HRChamCong;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "HRChamCong";
    }
}

