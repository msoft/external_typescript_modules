/// <reference path="ExternalDependency/index.d.ts" />
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var player = ExternalDependency.CreatePlayer('Buffon', 'Gianluigi');
        player.showPlayerName();
        return 0;
    };
    return Startup;
}());
Startup.main();
