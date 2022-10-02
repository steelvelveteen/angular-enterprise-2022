import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { HeadersInterceptor } from './headers.interceptor';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { UserfakesingleComponent } from './userfakesingle/userfakesingle.component';
import { UsersFakeComponent } from './users-fake/users-fake.component';

@NgModule({
  declarations: [AppComponent, UsersFakeComponent, UserfakesingleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FeatureModule,
    SharedModule,
    ServicesModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
