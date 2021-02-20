import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AccountModule } from 'src/app/account/account.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatTreeModule } from '@angular/material/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ChartModule } from 'primeng/chart';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { RatingModule } from 'primeng/rating';
import { InternalRoutingModule } from './internal-routing.module';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { HomeComponent } from '../home/home.component';
import { CreateFolderComponent } from '../create-folder/create-folder/create-folder.component';
import { SingleFolderComponent } from '../single-folder/single-folder.component';
import { SingleExpenseComponent } from '../single-expense/single-expense.component';
import {BadgeModule} from 'primeng/badge';
import {SkeletonModule} from 'primeng/skeleton';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { InitialComponent } from './initial/initial.component';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [HomeComponent,
    CreateFolderComponent,
    SingleFolderComponent,
    SingleExpenseComponent,
    InitialComponent],
  imports: [
    CommonModule,
    InternalRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    AccountModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    OverlayModule,
    MatTreeModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    A11yModule,
    ClipboardModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    BreadcrumbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    ColorPickerModule,
    ChartModule,
    MatChipsModule,
    RatingModule,
    MatBadgeModule,
    AvatarGroupModule,
    AvatarModule,
    BadgeModule,
    SkeletonModule,
    OrganizationChartModule,
    FullCalendarModule,
    MatSelectModule,
    MatAutocompleteModule,
    SidebarModule
  ]
})
export class InternalModule { }
