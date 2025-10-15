import { Component, signal } from '@angular/core';
import { SideBar } from './shared/components/side-bar/side-bar';
import { PagesModule } from './pages/pages-module';

@Component({
  selector: 'app-root',
  imports: [ PagesModule, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('store-app');
}
