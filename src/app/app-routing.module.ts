import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliatedGroupsComponent } from './affiliated-groups/affiliated-groups.component';
import { ConductorsComponent } from './conductors/conductors.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { MembersComponent } from './members/members.component';
import { PerformancesComponent } from './performances/performances.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: 'conductors', component: ConductorsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'join', component: JoinComponent },
  { path: 'performances', component: PerformancesComponent },
  { path: 'recordings', component: RecordingsComponent },
  { path: 'affiliated-groups', component: AffiliatedGroupsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'support', component: SupportComponent },
  { path: 'contact', component: ContactComponent },

  { path: '', component: HomeComponent },
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
