import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  nombre: string = '';
  urlImagen: string = '';
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  buscar() {
    this.pokemonService.obtenerPokemon(this.nombre).subscribe((data: any) => {
      this.urlImagen = data.sprites.front_default;
      console.log(data);
    });
  }
}
