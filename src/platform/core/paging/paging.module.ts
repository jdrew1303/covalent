import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdIconModule, MdSelectModule, MdButtonModule } from '@angular/material';

import { TdPagingBarComponent } from './paging-bar.component';

export { TdPagingBarComponent, IPageChangeEvent } from './paging-bar.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MdIconModule,
    MdSelectModule,
    MdButtonModule,
  ],
  declarations: [
    TdPagingBarComponent,
  ],
  exports: [
    TdPagingBarComponent,
  ],
})
export class CovalentPagingModule {
  /**
   * @deprecated in 1.0.0-beta.3
   *
   * Please use without calling forRoot()
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentPagingModule,
      providers: [ ],
    };
  }
}
