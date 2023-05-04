import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-linksredes',
  templateUrl: './linksredes.component.html',
  styleUrls: ['./linksredes.component.scss']
})
export class LinksredesComponent {

  element = false;

  visibilityForm(){  
        return (this.element = true);
  }

  hiddenForm(){
    return (this.element = false);
  }

}

