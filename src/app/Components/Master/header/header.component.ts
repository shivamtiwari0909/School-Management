import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  LogOut() {
    localStorage.setItem('IsLogin', 'false');
    location.reload();
  }
  activeMenuItem: number | null = null;
  submenuStates: boolean[] = [];
  isActive: { [key: number]: boolean } = {};

  toggleClass(index: number): void {
    Object.keys(this.isActive).forEach((key: string) => {
      this.isActive[+key] = false; // Convert key to number using +
    });

    // Toggle class for the clicked element
    this.isActive[index] = !this.isActive[index];
    if (this.activeMenuItem === index) {
      this.activeMenuItem = null;
    } else {
      this.activeMenuItem = index;
    }

    // Close all submenus except the one clicked
    this.submenuStates = this.submenuStates.map((state, i) => i === index ? !state : false);
  }
}

const list: NodeListOf<Element> = document.querySelectorAll('.list');

function accordion(this: HTMLElement, e: MouseEvent): void {
  e.stopPropagation();

  if (this.classList.contains('active2')) {
    this.classList.remove('active2');
  } else if (this.parentElement?.parentElement?.classList.contains('active2')) {
    this.classList.add('active');
  } else {
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('active2');
    }
    this.classList.add('active2');
  }
}
