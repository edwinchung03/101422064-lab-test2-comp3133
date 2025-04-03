import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComplement } from './character-list/character-list.component';
import { CharacterFilterComponent } from './character-filter/character-filter.component';
import { HarryPotterService } from './network/harry-potter.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailsComponent,
    CharacterListComplement,
    CharacterFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HarryPotterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
