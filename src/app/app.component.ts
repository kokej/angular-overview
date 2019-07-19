import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Curso de Angular';
  newTitleOnInit = 'Breve introducción a Angular';
  // newTitleInHtml = 'Introducción a Angular';

  changeTitle(newTitle: string): string {
    return (this.title = newTitle);
  }

  ngOnInit() {
    // this.changeTitle(this.newTitleOnInit);
  }
}
