import { Component, Input } from '@angular/core';
import { Project } from './Project';

@Component({
  selector: 'topNav',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
	project: Project;
}