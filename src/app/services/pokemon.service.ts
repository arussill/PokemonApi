import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonInterface } from '../pokemon/pokemon.interface.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  obtenerPokemones() {
    return this.http.get<PokemonInterface[]>(`${this.url}`);
  }

  obtenerImagen(nombre:string) {
    return this.http.get(`${this.url}${nombre}`);
  }
}
