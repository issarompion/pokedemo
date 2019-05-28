import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';

import { HttpClientModule} from '@angular/common/http';
import { PokeApiServiceService } from './poke-api-service.service';
import { AffichageComponent } from './affichage/affichage.component';

import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import { ChartsModule } from 'ng2-charts';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    AffichageComponent,

    //HttpClientModule
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    DropdownModule,
    AutoCompleteModule,
    ButtonModule,
    ChartsModule,
    VirtualScrollerModule,
    MatMenuModule,
    MatIconModule

  ],
  providers: [PokeApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
