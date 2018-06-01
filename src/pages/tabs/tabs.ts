import { Component } from '@angular/core';

import { InformationPage } from '../information/information';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = InformationPage;

  constructor() {

  }
}
