/// <reference path="ExternalDependency/index.d.ts" />

class Startup {

    public static main(): number {

         var player = ExternalDependency.CreatePlayer('Buffon', 'Gianluigi');
         player.showPlayerName();

        return 0;
    }
}

Startup.main();
