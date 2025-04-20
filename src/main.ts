// import "./style.css";

//!.......object

// type userProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };
// const user: userProfile = {
//   userName: "Nastya",
//   age: 37,
//   isActive: false,
// };
// function displayUser(user: userProfile) {
//   return `User name is ${user.userName}, he is ${user.age} years old and he is ${user.isActive}`;
// }
// console.log(displayUser(user));

//!===
// function logName(name: string) {
//   return `${name}`
// }

//!====massiv
// type Users = {
//   name: string;
//   age: number;
// };

// function catcTotal(arr: Users[]) {
// return arr.reduce((acc, el) => acc + el, 0);
// }
// const numberArrey = [10, 20, 30, 40];
// console.log(catcTotal(numberArrey));

// const user = [
//   { name: "Nastya", age: 37 },
//   { name: "Yana", age: 57 },
//   { name: "Amina", age: 32 },
// ];
// console.log(catcTotal(user));
//!=== enum
// enum VehicleType {
//   Car = "Audi",
//   Moto = "Ducati",
//   Truck = "BMW",
// }
// function getVehicleType(vehicle: VehicleType) {
//   [vehicle];
//   return `the vehicle type is ${vehicle}`;
// }
// console.log(getVehicleType(VehicleType.Car));
// console.log(getVehicleType(VehicleType.Truck));
//!=== Union Types

// function formatInput(input: string | number) {
//   if (typeof input === "number") {
//     return input.toFixed(2);
//   } else {
//     return input.toUpperCase();
//   }
// }
//!=== literal
// function lightShower(color: "green" | "yellow" | "red") {
//   if (color === "green") {
//     console.log("go");
//   } else if (color === "yellow") {
//     console.log("ready");
//   } else if (color === "red") {
//     console.log("stop");
//   }
// }

// lightShower("green");
//!=== type return

// function logName(name: string): void {
//   console.log(`${name}`);
// }
//!===  never
// function errorHandler(message: string): never {
//   throw new Error(message);
// }
// errorHandler("critical error !");
//!=== interface
// type Users = {
//   name: string;
//   age: number;
// };

// interface User {
//   name: string;
//   age: number;
//   lastName?: string;
// }

//!=============
// interface List {
//   [key: string]: number | null;
// }

// type Fruits = {
//   apples: number;
//   banana: number;
//   oranges: number;
// };
// const fruits: List = {
//   apples: 11,
//   banana: 34,
//   oranges: null,
//   pinaple: 10,
// };

// const electronic: List = {
//   phones: 44,
//   tablets: 77,
//   monitors: 44,
// };
//!======================== generics for massiv================
// function getFirstElement<T>(array: T[]): T | undefined {
//   return array[0];
// }

// const numArr = [10, 20, 30];
// console.log(getFirstElement(numArr));

// const stringArr = ["hello", "bay"];
// console.log(getFirstElement(stringArr));

// const objArr = [{ name: "Nas" }, { age: "37" }];
// console.log(getFirstElement(objArr));
//!=== generics for object

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const person = {
//   name: "Nas",
//   age: 30,
//   occupation: "Expert",
// };

// const name = getProperty(person, "name");
// const age = getProperty(person, "age");

//!=== Partial

// interface UserProfile {
//   username: string;
//   email: string;
//   age: number;
// }
// const originalProfile: UserProfile = {
//   username: "Dima",
//   email: "zeltcer@gmail.com",
//   age: 48,
// };

// function updateUserProf(profile: UserProfile, updates: Partial<UserProfile>) {
//   return { ...profile, ...updates };
// }

// const updateUserProfs = updateUserProf(originalProfile, {
//   age: 66,
// });
//!=== Readonly
// interface User {
//   id: number;
//   name: string;
// }
// const user: Readonly<User> = {
//   id: 100,
//   name: "nas",
// };

//!=== Pick
// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   hireDate: Date;
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John",
//   email: "zeltcer@gmail.com",
//   age: 48,
//   hireDate: new Date("2025-01-09"),
// };

// function displayInfo(
//   fullEmployeeInfo: Employee
// ): Pick<Employee, "name" | "email"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }
//!===

//!===

//!===

//!===

//!===
