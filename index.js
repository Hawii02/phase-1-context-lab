/* Your Code Here */
 function createEmployeeRecord(employeeData){
return {
    firstName: employeeData [0],
    familyName: employeeData [1],
    title: employeeData [2],
    payPerHour: employeeData [3],
    timeInEvents: [],
    timeOutEvents: [], 

       };
    }

  function createEmployeeRecords(employeesData){
   return employeesData.map(createEmployeeRecord);
      }

  function createTimeInEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");

    employee.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour, 10),
    });
      return employee;
     }
   
  function createTimeOutEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");

    employee.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10),
    });
      return employee;
  }
  
    function hoursWorkedOnDate (employee, date){


  const timeInEvent = employee.timeInEvents.find((event) => event.date === date);
  const timeOutEvent = employee.timeOutEvents.find((event) => event.date === date);

  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;

  return hoursWorked;
    }

    function wagesEarnedOnDate (employee, date){
      const hoursWorked  = hoursWorkedOnDate (employee, date);
      const payRate = employee.payPerHour; 
      const wagesEarned = hoursWorked * payRate;
      
      return wagesEarned;
    }
   
      
      function findEmployeeByFirstName(firstName) {
        return this.find((employee) => employee.firstName === firstName);
      }
      function calculatePayroll(employees) {
        return employees.reduce(
          (totalPayroll, employee) => totalPayroll + allWagesFor.call(employee),
          0
        );
      }
     
  

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
}

