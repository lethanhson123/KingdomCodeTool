import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienBanKiemTraGiamSatCoSoDongGoiComponent } from './bien-ban-kiem-tra-giam-sat-co-so-dong-goi/bien-ban-kiem-tra-giam-sat-co-so-dong-goi.component';

const routes: Routes = [
  { path: '', redirectTo: '/BienBanKiemTraGiamSatCoSoDongGoi', pathMatch: 'full' },
  {
    path: 'BienBanKiemTraGiamSatCoSoDongGoi', component: BienBanKiemTraGiamSatCoSoDongGoiComponent,
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
