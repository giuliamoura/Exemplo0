import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FaltasModule } from '../faltas/faltas.module';
import { NotasModule } from '../notas/notas.module';
import { BitcoinsModule } from '../bitcoins/bitcoins.module';


@NgModule({
    declarations: [
      HomeComponent,
    ],
    imports: [
        CommonModule,
        FaltasModule,
        NotasModule,
        BitcoinsModule,
    ],
    exports: [
      HomeComponent,
    ]
})

export class HomeModule { }