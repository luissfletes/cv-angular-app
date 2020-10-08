import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { MainModule } from '@features/main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
