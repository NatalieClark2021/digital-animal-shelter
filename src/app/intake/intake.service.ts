
import { EventEmitter, Injectable } from '@angular/core'

import { Dog } from './intake.module'
@Injectable({
  providedIn: 'root',
})
export class IntakeService{
  selectedDog = new EventEmitter();
  dogsChanged = new EventEmitter();

  public DOGS: Dog[] = [
    new Dog (
      'Doug',
      1,
      "Pees on strangers. It came from germany to persue an education at cambridge. They majored in social work before deciding that art was their true passion. After a bad business investment they went bankrupt and their apartment threw them out. Now they are here.",
      "https://images.unsplash.com/photo-1616004498881-ac3661ac0f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxkb2d8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ),
    new Dog (
      "Willis",
      2,
      "Idk its another dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      "https://images.unsplash.com/photo-1631986435826-9bb368c10641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxkb2d8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ),
    new Dog (
      "Brutus",
      3,
      "Big strong dog. no like cats. Very mighty. Grew up in Jersey, got caught in a scandal involving a home depot and some duck tape.",
      "https://images.unsplash.com/photo-1546644719-338fa016d442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
    ),
    new Dog (
      "Ned",
      4,
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "https://images.unsplash.com/photo-1599765625577-61a6e65e3567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
    ),
    new Dog (
      "Lola",
      5,
      "Oh no its lola",
      "https://images.unsplash.com/photo-1552401601-33db828218aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
    ),
    new Dog (
      "alice",
      2,
      "Idk its another dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      "https://images.unsplash.com/photo-1591907235917-3da27ce1421d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
    ),
    new Dog (
      "Queenie",
      2,
      "Idk its another dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      "https://images.unsplash.com/photo-1506551109886-6101f48c1ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
    ),

]
//create new dog
  newDog(dog: Dog) {
    var id = 0;
    this.DOGS.forEach( dog => {
      if (dog.id > id) {
        id = dog.id
      }
    });
    dog.id = id++
    this.DOGS.push(dog);
    this.dogsChanged.emit(this.DOGS.slice());
  }

  // read all dogs info

  getDogs(){
    return this.DOGS.slice();
  }

  //read 1 dogs info
getDog(idx: number){
  return this.DOGS.filter(dog => dog.id == idx)[0];
}

//release dog/delete
  releaseDog(idx: number) {
    if (idx === -1) return;
    var dog: Dog = this.getDog(idx)
    this.DOGS.splice(this.DOGS.indexOf(dog),1);
    this.dogsChanged.emit(this.DOGS.slice())
  }

  editDog(dog: Dog): void {
    var existingDog = this.getDog(dog.id)
    existingDog.name = dog.name;
    existingDog.desc = dog.desc;
    this.dogsChanged.emit(this.DOGS.slice())
  }
}


