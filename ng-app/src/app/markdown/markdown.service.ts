import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as showdown from 'showdown';
import 'showdown-highlightjs-extension';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  private converter;

  constructor(private http: HttpClient) {
    this.converter = new showdown.Converter({extensions: ['highlightjs']});
  }

  public async getMdAsHtml(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(url, {responseType: 'text'})
        .toPromise().then(data => {
        if (data) {
          this.convertMdToHTML(data).then(html => resolve(html));
        } else {
          resolve('Unable to load markup from ' + url + '.');
        }
      });
    });
  }

  public async convertMdToHTML(markdown: string, htmlEscape: boolean = false): Promise<any> {
    return new Promise(resolve => {
      if (htmlEscape) {
        markdown = this.escapeHTML(markdown); // Escape HTML-characters
      }
      const HTML = this.converter.makeHtml(markdown); // Create HTML-string
      const $elem = $('<div></div>'); // Create empty Jquery-element
      $elem.html(HTML); // Insert generated HTML
      $('*, * ~ *', $elem).addClass('font-ignore'); // Add 'font-ignore' class to every element
      resolve('<div class="markdown">' + $elem.html() + '</div>'); // Return original HTML with inserted classes as string
    });
  }

  public escapeHTML(html: string): string {
    const replace = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;'
    };
    return html.replace(/[&<>]/g, (tag: string) => {
      return replace[tag] || tag;
    });
  }
}
