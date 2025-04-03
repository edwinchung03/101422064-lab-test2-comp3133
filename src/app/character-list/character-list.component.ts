import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Character } from '../models/character';
import { HarryPotterService } from '../network/harry-potter.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComplement implements OnInit {
  characters: Character[] = [];
  paginatedCharacters: Character[] = [];
  pageSize: number = 12;
  pageIndex: number = 0;

  constructor(
    private harrypotterService: HarryPotterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.harrypotterService.getAllCharacters().subscribe((data: Character[]): void => {
      this.characters = data;
      this.updatePagination();
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagination();
  }

  updatePagination(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedCharacters = this.characters.slice(startIndex, endIndex);
  }
}
