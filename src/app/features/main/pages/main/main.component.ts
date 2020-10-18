import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataRetrieverService } from '@core/services';
import { JsonData, Skill } from '@shared/models';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  jsonData$: Observable<JsonData>;
  proSkills$: Observable<Skill[]>;

  constructor(
    private dataRetriever: DataRetrieverService
  ) { }

  ngOnInit(): void {
    this.jsonData$ = this.dataRetriever.getJsonDataFile('skill-sets').pipe(
      shareReplay(1)
    );

    this.proSkills$ = this.jsonData$.pipe(
      map(jsonData => jsonData.proAbilities)
    );
  }

}
