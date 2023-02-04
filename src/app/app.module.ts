import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConductorsComponent } from './conductors/conductors.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { AffiliatedGroupsComponent } from './affiliated-groups/affiliated-groups.component';
import { HistoryComponent } from './history/history.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { JoinComponent } from './join/join.component';
import { PerformancesComponent } from './performances/performances.component';

@NgModule({
  declarations: [
    AppComponent,
    ConductorsComponent,
    MembersComponent,
    HomeComponent,
    RecordingsComponent,
    AffiliatedGroupsComponent,
    HistoryComponent,
    SupportComponent,
    ContactComponent,
    JoinComponent,
    PerformancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
