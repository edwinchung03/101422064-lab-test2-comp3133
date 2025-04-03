import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Character } from '../models/character';
import { HarryPotterService } from '../network/harry-potter.service';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.css'],
})
export class CharacterFilterComponent implements OnInit {
  characterHouses = [
    'Gryffindor',
    'Slytherin',
    'Hufflepuff',
    'Ravenclaw',
  ];
  houseSelectedIndex: any;

  pageSize: number = 9;
  pageIndex: number = 0;
  paginatedCharacters: Character[] = [];

  characters: Character[] = [];
  originalCharacters: Character[] = [];

  // Search term
  searchTerm: string = '';

  constructor(
    private harrypotterService: HarryPotterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.harrypotterService.getAllCharacters().subscribe((data: Character[]): void => {
      this.originalCharacters = data;
      this.characters = data;
      this.updatePagination();
    });
  }

  updatePagination(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedCharacters = this.characters.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagination();
  }

  getAll(): any {
    this.harrypotterService.getAllCharacters().subscribe(
      (data: any) => {
        this.originalCharacters = data;
        this.characters = data;
        this.updatePagination();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  characterFilter(index: number, house: string): any {
    this.getFilteredHouses(house);
    this.houseSelectedIndex = index;
  }

  getFilteredHouses(house: string): any {
    this.harrypotterService.getCharacterByHouse(house).subscribe(
      (data: any) => {
        this.characters = data;
        this.originalCharacters = data;
        this.pageIndex = 0;
        this.updatePagination();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  removeFilter(): void {
    this.searchTerm = '';
    this.getAll();
    this.houseSelectedIndex = null;
  }

}
