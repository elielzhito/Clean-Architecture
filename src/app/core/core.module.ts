import { ProductoApiService } from './driven-adapter/producto-api.service';
import { ProductoGateway } from 'src/app/domain/gateway/producto-gateway';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: ProductoGateway, useClass: ProductoApiService }],
})
export class CoreModule {}
