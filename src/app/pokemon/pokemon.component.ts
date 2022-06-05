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
      // let image = {"front_default":data.sprites.front_default};
      // this.pokemones.map((pokemon:any) => {
      //   pokemon.image=data.sprites.front_default;
      //   return pokemon;
      // });

      // this.pokemones.map((pokemon) => {
      //   this.pokemones = [
      //     ...this.pokemones,
      //     { name: pokemon.name, url: pokemon.url.replace(pokemon.url  ,data.sprites.front_default) },
      //   ];
      //   // this.urlImagen = data.sprites.front_default;
      // });

      this.pokemones.filter((pokemon: any) => {
        if (pokemon.name === nombre) {
          pokemon.image = data.sprites.front_default;
          pokemon.abilities = data.abilities.map((habilidad: any) => {
            return habilidad.ability.name;
          });
        }

        // pokemon.name===nombre? pokemon.image = data.sprites.front_default : pokemon;
        // pokemon.image=data.sprites.front_default;
        return pokemon;
      });
    });
  }

  private listaPokemones(): void {
    this.pokemonService.obtenerPokemones().subscribe((data: any) => {
      this.pokemones.push(
        ...data.results.map((pokemon: any) => {
          this.listaImagen(pokemon.name);
          // pokemon.url = this.urlImagen;    // console.log(pokemon)
          return pokemon;
        })
      );
      console.log(this.pokemones);
    });
  }
}
