/// <reference path="./User.ts" />
/// <reference path="./UserService.ts" />

const user = App.Services.getUser(21, "Lakshay");
console.log("UserName = ", user.name);
console.log("UserId = ", user.id);
