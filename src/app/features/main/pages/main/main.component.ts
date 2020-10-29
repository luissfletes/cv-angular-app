import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataRetrieverService } from '@core/services';
import {
  SkillsJsonData,
  EventsJsonData,
  SideSkillsJsonData,
  ContactJsonData,
} from '@shared/models';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  skillsJsonData$: Observable<SkillsJsonData>;
  eventsJsonData$: Observable<EventsJsonData>;
  sideSkillsJsonData$: Observable<SideSkillsJsonData>;
  contactJsonData$: Observable<ContactJsonData>;

  constructor(
    private dataRetriever: DataRetrieverService
  ) { }

  ngOnInit(): void {
    this.skillsJsonData$ = this.dataRetriever.getJsonDataFile<SkillsJsonData>('skill-sets');
    this.eventsJsonData$ = this.dataRetriever.getJsonDataFile<EventsJsonData>('event-sets');
    this.sideSkillsJsonData$ = this.dataRetriever.getJsonDataFile<SideSkillsJsonData>('side-skills-sets');
    this.contactJsonData$ = this.dataRetriever.getJsonDataFile<ContactJsonData>('contact');
  }

}
