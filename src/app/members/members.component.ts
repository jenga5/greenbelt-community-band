import { Component } from '@angular/core';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent  {

  membersList = require('./members-list.json');
  objectKeys = Object.keys;
  objectValues = Object.values;

}
