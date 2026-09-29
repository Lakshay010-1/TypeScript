import type { User } from "./User.js";
import { getUser } from "./UserService.js";

let user: User = getUser(21, "Lakshay");
console.log("UserName = ", user.name);
console.log("UserId = ", user.id);