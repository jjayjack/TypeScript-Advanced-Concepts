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

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Type Guards - typeof!
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

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

printEmployeeInfo({ name: "Manuel", startDate: new Date() });

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
useVehicle(v1);
useVehicle(v2);
