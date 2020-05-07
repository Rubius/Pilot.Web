import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DocumentsComponent } from './pages/documents/documents.component';
import { DocumentComponent } from './pages/document/document.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { DocumentToolbarComponent } from "./components/document-toolbar/document-toolbar.component";
import { DocumentsToolbarComponent } from "./components/documents-toolbar/documents-toolbar.component";
import { ModalModule } from "../ui/modal/modal.module";
import { SideModalModule } from '../ui/side-modal/side-modal.module';
import { ErrorModule } from "../ui/error/error.module";
import { DocumentVersionsComponent } from "./components/document-versions/document-versions.component";
import { DocumentsRoutingModule } from "./documents-routing.module";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ModalModule,
    SideModalModule,
    ErrorModule,
    DocumentsRoutingModule
  ],
  declarations: [
    DocumentsComponent,
    DocumentComponent,
    DocumentListComponent,
    BreadcrumbsComponent,
    DocumentToolbarComponent,
    DocumentVersionsComponent,
    DocumentsToolbarComponent
  ],
  exports: [
    DocumentsComponent,
    DocumentComponent,
    DocumentListComponent
  ],
})
export class DocumentsModule {}
