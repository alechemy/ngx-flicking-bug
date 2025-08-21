import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxFlickingComponent } from '@egjs/ngx-flicking';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxFlickingComponent],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <ngx-flicking class="flicking w-[500px]" [options]="{ circular: true, moveType: 'freeScroll' }">
      <div class="mr-2 h-[200px] w-[200px] bg-blue-400"></div>
      <div class="mr-2 h-[200px] w-[200px] bg-blue-400"></div>
      <div class="mr-2 h-[200px] w-[200px] bg-blue-400"></div>
      <div class="mr-2 h-[200px] w-[200px] bg-blue-400"></div>
      <div class="mr-2 h-[200px] w-[200px] bg-blue-400"></div>
      <div class="mr-2 h-[200px] w-[200px] bg-blue-400"></div>
    </ngx-flicking>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ngx-flicking-bug');
}
