import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienBanKiemTraGiamSatCoSoDongGoiComponent } from './bien-ban-kiem-tra-giam-sat-co-so-dong-goi.component';

describe('BienBanKiemTraGiamSatCoSoDongGoiComponent', () => {
  let component: BienBanKiemTraGiamSatCoSoDongGoiComponent;
  let fixture: ComponentFixture<BienBanKiemTraGiamSatCoSoDongGoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienBanKiemTraGiamSatCoSoDongGoiComponent]
    });
    fixture = TestBed.createComponent(BienBanKiemTraGiamSatCoSoDongGoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
