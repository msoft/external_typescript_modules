var ExternalDependency;
(function (ExternalDependency) {
    var Person = /** @class */ (function () {
        function Person(name, firstName) {
            this.name = name;
            this.firstName = firstName;
        }
        Person.prototype.showPersonName = function () {
            console.log("Name: " + this.name + "; First Name: " + this.firstName);
        };
        return Person;
    }());
    var Player = /** @class */ (function () {
        function Player(person) {
            this.person = person;
        }
        Player.prototype.showPlayerName = function () {
            this.person.showPersonName();
        };
        return Player;
    }());
    function CreatePlayer(name, firstName) {
        return new Player(new Person(name, firstName));
    }
    ExternalDependency.CreatePlayer = CreatePlayer;
})(ExternalDependency || (ExternalDependency = {}));
