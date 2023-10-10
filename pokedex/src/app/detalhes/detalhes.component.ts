import { Component } from '@angular/core';
import { PokemonService} from '../services/pokemon.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {

  public pokemon: any;

  constructor(private pokemonService: PokemonService, private rotaAtiva: ActivatedRoute) {}

  ngOnInit(): void{
    const index: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.pokemonService.getDetails(index).subscribe((pokemonRes)=>{
      this.pokemon = pokemonRes;

      console.log(pokemonRes);
    });
  }
}
