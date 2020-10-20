import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataRetrieverService } from '@core/services';
import { SkillsJsonData, Skill, EventsJsonData, Event } from '@shared/models';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  skillsJsonData$: Observable<SkillsJsonData>;
  eventsJsonData$: Observable<EventsJsonData>;

  constructor(
    private dataRetriever: DataRetrieverService
  ) { }

  ngOnInit(): void {
    this.skillsJsonData$ = this.dataRetriever.getJsonDataFile<SkillsJsonData>('skill-sets').pipe(
      shareReplay(1)
    );

    this.eventsJsonData$ = this.dataRetriever.getJsonDataFile<EventsJsonData>('event-sets').pipe(
      shareReplay(1)
    );
  }

}
