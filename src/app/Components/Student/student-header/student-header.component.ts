import { Component } from '@angular/core';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent {
  username: string | null = localStorage.getItem("UserName");
  classname: string | null = localStorage.getItem("ClassName");
  
  constructor() {
    if (this.username) {
      this.username = this.username.toString();
    } else {
      console.error("UserName not found in local storage");
    }
    if (this.classname) {
      this.classname = this.classname.toString();
    } else {
      console.error("ClassName not found in local storage");
    }
  }
  router: any;
  LogOut() {
    localStorage.setItem('StudentIsLogin', 'false');
    localStorage.removeItem('StudentID');
    location.reload();
    // this.router.navigateByUrl('student-login');
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
