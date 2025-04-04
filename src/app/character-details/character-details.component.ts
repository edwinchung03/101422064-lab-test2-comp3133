import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarryPotterService } from '../network/harry-potter.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  singleCharacter: any;
  characterId: any;

  constructor(
    private route: ActivatedRoute,
    private harryPotterService: HarryPotterService
  ) {}

  ngOnInit() {
    this.characterId = this.route.snapshot.params['id'];
    this.getSingleMission();
  }

  getSingleMission() {
    this.harryPotterService
      .getCharacterById(this.characterId)
      .subscribe((data: any) => {
        this.singleCharacter = data[0];
        console.log(this.singleCharacter);
      });
  }
}