import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { SearchArtistPipe } from './search-artist.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistItemsComponent } from './artist-items/artist-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchArtistPipe,
    ArtistDetailsComponent,
    ArtistItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
