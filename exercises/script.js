"use strict";
{
  const names = ["Kasia", "Tomek", "Amanda", "Maja"];

  let female_names = [];
  for (let el of names) {
    if (el[el.length - 1] === "a") {
      female_names.push(el);
    }
  }
  console.log(female_names);

  const employees = {
    john: {
      name: "John Doe",
      salary: 3000,
    },
    amanda: {
      name: "Amanda Doe",
      salary: 4000,
    },
  };

  const employeeNames = [];
  const employeeSalaries = [];
  for (let key in employees) {
    console.log(`${employees[key].name} ma pensję ${employees[key].salary}`);
    employeeNames.push(employees[key].name.split(" ")[0]);
    employeeSalaries.push(employees[key].salary);
  }
  console.log(employeeNames);
  console.log(employeeSalaries);

  const salaries = [2000, 3000, 1500, 6000, 3000];
  let sum = 0;
  let max = salaries[0];
  let min = salaries[0];
  for (let el of salaries) {
    sum += el;
    if (el > max) {
      max = el;
    }
    if (el < min) {
      min = el;
    }
  }
  console.log("salaries sum", sum);
  console.log("max", max);
  console.log("min", min);
}
{
  const employees = [
    { name: "Amanda Doe", salary: 3000 },
    { name: "John Doe", salary: 4000 },
    { name: "Claire Downson", salary: 2000 },
    { name: "Freddie Clarkson", salary: 6000 },
    { name: "Thomas Delaney", salary: 8200 },
  ];

  const filterEmployees = function (employees, minSalary, maxSalary) {
    const filterEmployees = [];
    for (let employee of employees) {
      console.log("employee:", employee);
      if (employee.salary > minSalary && employee.salary < maxSalary) {
        filterEmployees.push(employee);
      }
    }
    return filterEmployees;
  };
  const filteredEmployees = filterEmployees(employees, 2000, 8000);
  console.log("filteredEmployees:");
  console.log(filteredEmployees);
}
{
  const obj = {
    firstName: "John",
    lastName: "Doe",
  };
  for (let key in obj) {
    console.log(key, ":", obj[key]);
  }
}
{
  console.log("Exercise 6: forEach function");
  const forEach = function (arr, callback) {
    for (let el of arr) {
      callback(el);
    }
  };
  forEach(["John", "Amanda", "Thomas"], function (item) {
    console.log(item);
  });
}
{
  console.log("Exercise 7: format name");
  const formatName = function (name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  };
  const formatFullName = function (fullName) {
    fullName = fullName.split(" ");
    return formatName(fullName[0]) + " " + formatName(fullName[1]);
  };
  console.log(formatFullName("aMAnDa dOE")); // returns Amanda Doe
  console.log(formatFullName("AMANDA DOE")); // returns Amanda Doe
  console.log(formatFullName("john DOE")); // returns John Doe
}
{
  console.log("Exercise 8: get evens");
  const getEvensInRange = function (startInt, endInt) {
    const evens = [];

    if (startInt % 2 !== 0) {
      startInt++;
    }
    while (startInt < endInt) {
      evens.push(startInt);
      startInt += 2;
    }
    return evens;
  };
  console.log(getEvensInRange(1, 111));
}
{
  console.log("Exercise 9: filter array");
  const filterArray = function (arr, callback) {
    const filteredArr = [];
    for (let el of arr) {
      if (callback(el)) {
        filteredArr.push(el);
      }
    }
    return filteredArr;
  };
  const testResult = filterArray([1, 2, 3, 4, 5, 6], function (el) {
    return el % 2 === 0;
  });
  console.log(testResult);
}
