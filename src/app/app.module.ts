import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GenericCardComponent } from './shared/components/generic-card/generic-card.component';
import { GenericListComponent } from './shared/components/generic-list/generic-list.component';

@NgModule({
  declarations: [

    // 其他组件
  ],
  imports: [
    BrowserModule,
    GenericCardComponent,
    GenericListComponent,
    // 其他模块
  ],
  providers: [],
  bootstrap: [/* 根组件如 AppComponent */]
})
export class AppModule { }
