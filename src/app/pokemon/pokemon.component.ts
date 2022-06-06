import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonInterface } from './pokemon.interface.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  nombre: string = '';
  pokemones: PokemonInterface[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.listaPokemones();
  }

  private listaImagen(nombre: string): void {
    this.pokemonService.obtenerImagen(nombre).subscribe((data: any) => {
      this.pokemones.filter((pokemon: any) => {
        if (pokemon.name === nombre) {
          pokemon.image = data.sprites.front_default;
          pokemon.abilities = data.abilities.map((habilidad: any) => {
            return habilidad.ability.name;
          });
        }
        return pokemon;
      });
    });
  }

  private listaPokemones(): void {
    this.pokemonService.obtenerPokemones().subscribe((data: any) => {
      this.pokemones.push(
        ...data.results.map((pokemon: any) => {
          this.listaImagen(pokemon.name);
          return pokemon;
        })
      );
    });
  }
}
