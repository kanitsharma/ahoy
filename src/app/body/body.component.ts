import { Component, OnInit } from '@angular/core';
import { YodaService } from '../yoda.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [YodaService]
})
export class BodyComponent implements OnInit {

  sentence: string = "";
  yodasentence : string = "Ahoy!";
  uri : string = "";

  constructor( private YodaService : YodaService ) {

  }

  getinput(){
    this.uri = encodeURI(this.sentence);
    this.YodaService.fetchData(this.uri).subscribe(
      (data) => {
        this.yodasentence = data.contents.trnaslated;
      }
    );
  }

  ngOnInit() {

  }

}
