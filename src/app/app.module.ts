import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './global/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { IconsDefsComponent } from './global/icons-defs/icons-defs.component';
import { HeaderComponent } from './home/header/header.component';
import { ProductBlockComponent } from './home/product-block/product-block.component';
import { FooterComponent } from './global/footer/footer.component';
import { SocialNetworksComponent } from './global/social-networks/social-networks.component';
import { BannerComponent } from './global/banner/banner.component';
import { MenuComponent } from './global/menu/menu.component';
import { NavMenuComponent } from './global/nav-menu/nav-menu.component';
import { DesayunosComponent } from './desayunos/desayunos/desayunos.component';
import { HeaderInnerComponent } from './desayunos/header-inner/header-inner.component';
import { DeckDesayunosComponent } from './desayunos/deck-desayunos/deck-desayunos.component';
import { DetalleDesayunosComponent } from './desayunos/detalle-desayunos/detalle-desayunos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    IconsDefsComponent,
    HeaderComponent,
    ProductBlockComponent,
    FooterComponent,
    SocialNetworksComponent,
    BannerComponent,
    MenuComponent,
    NavMenuComponent,
    DesayunosComponent,
    HeaderInnerComponent,
    DeckDesayunosComponent,
    DetalleDesayunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
