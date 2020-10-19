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

  proSkills$: Observable<Skill[]>;
  devTechs$: Observable<Skill[]>;
  frameworksLibraries$: Observable<Skill[]>;

  workExperienceEvents$: Observable<Event[]>;
  educationEvents$: Observable<Event[]>;

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


    this.proSkills$ = this.skillsJsonData$.pipe(
      map(jsonData => jsonData.proAbilities)
    );

    this.devTechs$ = this.skillsJsonData$.pipe(
      map(jsonData => jsonData.devTechs)
    );

    this.frameworksLibraries$ = this.skillsJsonData$.pipe(
      map(jsonData => jsonData.frameworksLibraries)
    );

    this.workExperienceEvents$ = this.eventsJsonData$.pipe(
      map(jsonData => jsonData.workExperienceEvents)
    );

    this.educationEvents$ = this.eventsJsonData$.pipe(
      map(jsonData => jsonData.educationEvents)
    );


  }

}
