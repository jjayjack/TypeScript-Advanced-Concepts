type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// type Combinable = string | number;
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric;

// // Type Guards - typeof!
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// Type Guards - if in!
type UnknownEmployee = Employee | Admin;
function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

// printEmployeeInfo({ name: "Manuel", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}
class Truck {
  drive() {
    console.log("Trucking...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if ("loadCargo" in vehicle) {
  //     vehicle.loadCargo(10000);
  //   }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10000);
  }
}
// useVehicle(v1);
// useVehicle(v2);

interface Bird {
  species: "bird";
  flyingSpeed: number;
}
interface Horse {
  species: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.species) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at the speed of " + speed);
}

// moveAnimal({ species: "bird", flyingSpeed: 35 });

// Type Casting
const paragraph = document.querySelector("p");
const paragraphID = document.getElementById("message-output");
const userInput1 = <HTMLInputElement>document.getElementById("user-input")!;
// const userInput2 = document.getElementById("user-input2")! as HTMLInputElement;
if (userInput1) {
  (userInput1 as HTMLInputElement).value = "Hi there!";
}
// Index Properties
interface ErrorContainer {
  //create object {email: "not a valid email", username: "must start with a character"}
  // id: string;
  [property: string]: string;
}
const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};
// Function Overloads
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
const sum = add(1, 5);
const result = add("Max", "Thomas");
result.split(" ");

// Optional Chaining
const fetchedUserData = {
  id: "ul",
  name: "Jocelyn",
  job: { title: "CEO", description: "My own company" },
};
console.log(fetchedUserData?.job?.title);
const userInput = undefined;
const storedData = userInput ?? "DEFAULT";
console.log(storedData);
