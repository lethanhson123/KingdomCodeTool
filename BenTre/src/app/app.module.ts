import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienBanKiemTraGiamSatCoSoDongGoiComponent } from './bien-ban-kiem-tra-giam-sat-co-so-dong-goi/bien-ban-kiem-tra-giam-sat-co-so-dong-goi.component';


@NgModule({
  declarations: [
    AppComponent,
    BienBanKiemTraGiamSatCoSoDongGoiComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
