import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [// para usarlo fuera
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
