import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  phrase: string = "cat enthusiast"
  phraseOptions: string[] = ["cat enthusiast", "programmer", "plant owner", "piano player"];

  constructor() { }

  ngOnInit(): void {
    this.phrase = this.phraseOptions[Math.floor(Math.random() * this.phraseOptions.length)];
  }

}
