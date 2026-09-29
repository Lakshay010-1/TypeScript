namespace App.Models {
  export class User {
    constructor(
      public id: number,
      public name: string,
    ) {
      console.log("User created...");
    }
  }
}
