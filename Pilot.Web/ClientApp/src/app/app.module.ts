import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import { AuthGuard } from './auth/auth.guard';
import { ErrorModule } from './ui/error/error.module';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { DocumentsModule } from './documents/documents.module';
import { DocumentsComponent } from './documents/pages/documents/documents.component';
import { CustomModalModule } from './ui/modal/modal.module';
import { RouteReuseService } from './core/route-reuse.service';
import { CacheInterceptor } from './core/interceptors/cache.interceptor';
import { ImagesCacheInterceptor } from './core/interceptors/images-cache.interceptor';
import {AppRoutingModule} from "./app-routing.module";
import {BootstrapUiModule} from "./bootstrap-ui.module";
import {AlertComponent} from "./core/components/alert/alert.component";
import {GlobalErrorHandler} from "./core/global-error-handler";
import { ClickStopPropagationDirective, ClickPreventDefaultDirective } from './core/directives/stop-propagation.directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AlertComponent,
    ClickStopPropagationDirective,
    ClickPreventDefaultDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ErrorModule,
    ModalModule,
    AppRoutingModule,
    BootstrapUiModule,
    AuthModule,
    CustomModalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader, // экспортированная factory функция, необходимая для компиляции в режиме AoT
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthGuard,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: RouteReuseStrategy, useClass: RouteReuseService },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ImagesCacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
