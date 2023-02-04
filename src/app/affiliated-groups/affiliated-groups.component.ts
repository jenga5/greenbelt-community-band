import { Component } from '@angular/core';

@Component({
  selector: 'app-affiliated-groups',
  templateUrl: './affiliated-groups.component.html',
  styleUrls: ['./affiliated-groups.component.scss']
})
export class AffiliatedGroupsComponent {

  windEnsembleList = require('./wind-ensemble-members-list.json');
  brassEnsembleList = require('./brass-ensemble-members-list.json');

  objectKeys = Object.keys;
  objectValues = Object.values;

}
