import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "./table/table.component";
import {PostComponent} from './post/post.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TableComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
