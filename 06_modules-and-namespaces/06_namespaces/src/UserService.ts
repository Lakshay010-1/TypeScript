/// <reference path="./User.ts" />

namespace App.Services {
  export function getUser(id: number, name: string): App.Models.User {
    return new App.Models.User(id, name);
  }
}
