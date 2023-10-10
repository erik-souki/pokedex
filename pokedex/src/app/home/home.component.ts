import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public pokemon: any[ ] = [ ];
  private offset: number = 0;

  public pokemonName = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.load();
  }

  public load(loadMore = false, event?: any) {
    if (loadMore) {
      this.offset += 25;
    }

    this.pokemonService.getAll(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];

      console.log(res);

    });
  }

  public onSearchChange(e: any) {
    let value = e;

    console.log('Aqui!')
    console.log(value);
    console.log(typeof value);

    if (value === '' || value === undefined) {
      if (this.offset > 0) {
        this.offset = 0;
      }

      if (this.pokemon.length === 0) {
        this.load();
      }

      return;
    }

    this.pokemonService.find(value).subscribe({
      next: (res) => { this.pokemon = [res] },
      error: (err) => { this.pokemon = [] }
    });

 }

}

