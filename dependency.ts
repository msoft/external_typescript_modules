// module ExternalDependency { 
//     class Person {
//         constructor(private name: string, private firstName: string) {
//         }

//         public showPersonName(): void {
//             console.log("Name: " + this.name + "; First Name: " + this.firstName); 
//         }
//     }

//     class Player {
//         constructor(private person: Person) {
//         }

//         public showPlayerName(): void {
//             this.person.showPersonName(); 
//         }
//     }

//     export function CreatePlayer(name: string, firstName: string): Player {
//         return new Player(new Person(name, firstName));
//     }
// }