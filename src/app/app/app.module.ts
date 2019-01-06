import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KeyDetectComponent } from '../components/key-detect/key-detect.component';
import { KeyboardKeyComponent } from '../components/keyboard-key/keyboard-key.component';
import { KeyboardViewComponent } from '../components/keyboard-view/keyboard-view.component';
import { HomeComponent } from '../pages/home/home.component';
import { IndexedDbService } from '../services/indexed-db.service';
import { KeyStateService } from '../services/key-state.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShorthandPipe } from '../pipes/shorthand.pipe';
import { KeySizePipe, KeySizePercentagePipe } from '../pipes/key-size.pipe';
import { KeyboardElementComponent } from '../components/keyboard-element/keyboard-element.component';
import { LabelPositionerPipe } from '../pipes/label-positioner.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeyDetectComponent,
    KeyboardViewComponent,
    KeyboardElementComponent,
    KeyboardKeyComponent,

    ShorthandPipe,
    KeySizePipe,
    KeySizePercentagePipe,
    LabelPositionerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    KeyStateService,
    IndexedDbService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
