import {Component, ElementRef, OnInit} from '@angular/core';
import {MarkdownService} from './markdown.service';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent {
  src: string;
  url: string;
  markdown = 'loading';

  constructor(elm: ElementRef, mkdService: MarkdownService) {
    this.src = elm.nativeElement.getAttribute('src');
    let url = elm.nativeElement.getAttribute('url');
    if (!url || url === '' || url == null) {
      url = this.src;
    }
    this.url = url;
    mkdService.getMdAsHtml(this.src).then(data => this.markdown = data);
  }
}
