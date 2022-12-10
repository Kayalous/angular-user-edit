import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.css'],
})
export class NavbarLinkComponent {
  @Input() href: string;
  @Input() noActiveState: boolean;
}
