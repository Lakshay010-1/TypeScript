import { User } from "./User.js";

export function getUser(id: number, name: string) {
  return new User(id, name);
}
