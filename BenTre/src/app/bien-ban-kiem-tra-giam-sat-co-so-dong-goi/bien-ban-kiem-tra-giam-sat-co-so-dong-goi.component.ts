import { Component } from '@angular/core';
import { BienBanKiemTraGiamSatCoSoDongGoi } from 'src/app/shared/BienBanKiemTraGiamSatCoSoDongGoi.model';
import { BienBanKiemTraGiamSatCoSoDongGoiService } from 'src/app/shared/BienBanKiemTraGiamSatCoSoDongGoi.service';
import { TieuChi } from 'src/app/shared/TieuChi.model';
import { TieuChiService } from 'src/app/shared/TieuChi.service';
import { SanPham } from 'src/app/shared/SanPham.model';
import { SanPhamService } from 'src/app/shared/SanPham.service';
import { ThiTruong } from 'src/app/shared/ThiTruong.model';
import { ThiTruongService } from 'src/app/shared/ThiTruong.service';
import { NhanVien } from 'src/app/shared/NhanVien.model';
import { NhanVienService } from 'src/app/shared/NhanVien.service';

@Component({
  selector: 'app-bien-ban-kiem-tra-giam-sat-co-so-dong-goi',
  templateUrl: './bien-ban-kiem-tra-giam-sat-co-so-dong-goi.component.html',
  styleUrls: ['./bien-ban-kiem-tra-giam-sat-co-so-dong-goi.component.css']
})
export class BienBanKiemTraGiamSatCoSoDongGoiComponent {
  constructor(
    public BienBanKiemTraGiamSatCoSoDongGoiService: BienBanKiemTraGiamSatCoSoDongGoiService,
    public TieuChiService: TieuChiService,
    public SanPhamService: SanPhamService,
    public ThiTruongService: ThiTruongService,
    public NhanVienService: NhanVienService,
  ) { }

  ngOnInit(): void {
    this.TieuChiGetAllToList();
    this.SanPhamGetAllToList();
    this.ThiTruongGetAllToList();
    this.NhanVienGetAllToList();
  }
  TieuChiGetAllToList() {
    this.TieuChiService.GetAllToList();
  }
  SanPhamGetAllToList() {
    this.SanPhamService.GetAllToList();
  }
  ThiTruongGetAllToList() {
    this.ThiTruongService.GetAllToList();
  }
  NhanVienGetAllToList() {
    this.NhanVienService.GetAllToList();
  }
  onNhanVienFocus() {
    this.NhanVienService.formData = {
    }
    this.NhanVienService.list?.push(this.NhanVienService.formData);
  }
  onLuuThongTinClick() {
    if (this.NhanVienService.list) {
      this.BienBanKiemTraGiamSatCoSoDongGoiService.formData.DoanKiemTra = [];
      for (let i = 0; i < this.NhanVienService.list.length; i++) {
        if (this.NhanVienService.list[i]) {
          if (this.NhanVienService.list[i].HoTen) {
            this.BienBanKiemTraGiamSatCoSoDongGoiService.formData.DoanKiemTra?.push(this.NhanVienService.list[i])
          }
        }
      }
    }
    this.BienBanKiemTraGiamSatCoSoDongGoiService.formData.TieuChi = this.TieuChiService.list;
    this.BienBanKiemTraGiamSatCoSoDongGoiService.Save(this.BienBanKiemTraGiamSatCoSoDongGoiService.formData);
  }
}
