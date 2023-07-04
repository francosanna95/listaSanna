import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  pokemons: string[] = ['Pikachu', 'Bulbasaur', 'Squirtle']

  newPokemon={
    name: ''
  }

  onSavePokemons(): void{
    if(this.newPokemon.name.length>0){
      this.pokemons.push(this.newPokemon.name)
    }
  }

  @ViewChild('titulo') myDiv = null;
  


  onSelectPokemon(item : string) : void{
    alert("pokemon selected : " + item);
  }
}
