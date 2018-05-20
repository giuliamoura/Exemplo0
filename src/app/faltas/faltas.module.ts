import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaltasComponent } from './faltas.component';


@NgModule({
    declarations: [
        FaltasComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FaltasComponent,
    ]
})

export class FaltasModule { }