declare namespace ExternalDependency { 
   class Person { 
     constructor(name: string, firstName: string); 
     showPersonName(): void;  
   }      

   class Player { 
     constructor(person: Person); 
     showPlayerName(): void; 
   }       

   function CreatePlayer(name: string, firstName: string): Player;     
} 
