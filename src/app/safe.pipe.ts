import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer : DomSanitizer){
    // dependency injection only
  }

  transform(url : any) {  // this transforms the unsafe URL into a safe URL
    url = url.replace("watch?v=", "embed/"); // this statement is to fix the chrome x-frame error
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

}
