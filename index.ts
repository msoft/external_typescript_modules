import { Person, Player, CreatePlayer } from "./dependency.js";

class Startup {

    public static main(): number {

         var player = new Player(new Person('Buffon', 'Gianluigi'));
         player.showPlayerName();

        return 0;
    }
}

Startup.main();
