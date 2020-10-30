import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const newItemRoute: Routes = [
    { path: '', component: MediaItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoute);