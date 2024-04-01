function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
 
    function onClick() {
       const input = document.querySelector('#inputs > textArea');
       const bestRestaurantElement = document.querySelector('#bestRestaurant > p');
       const bestWorkersElement = document.querySelector('#workers > p');
       const inputValue = JSON.parse(input.value);
       const restaurants = {};
 
       Array.from(inputValue, element => {
          const [restaurantName, workers] = element.split(" - ");
          const workersColection = workers.split(", ");
          let workersArray = [];
 
          for (const worker of workersColection) {
             const [workerName, salary] = worker.split(" ");
             workersArray.push({ name: workerName, salary: salary });
          }
          if (restaurants[restaurantName]) {
             workersArray = workersArray.concat(restaurants[restaurantName].workers);
          }
 
          workersArray.sort((worker1, worker2) => worker2.salary - worker1.salary);
 
          const bestSalary = Number(workersArray[0].salary);
          const entries = Object.entries(workersArray);
 
          let sum = 0;
 
          Array.from(entries, entry => {
             const value = Number(entry[1].salary);
             sum += value;
          });
 
          const averageSalary = sum / entries.length;
 
          restaurants[restaurantName] = {
             workers: workersArray,
             averageSalary: averageSalary,
             bestSalary: bestSalary
          };
       });
 
       let bestRestaurantResult = 0;
       let bestRestaurant = undefined;
 
       for (const name in restaurants) {
          const currentRestaurant = restaurants[name];
          if (currentRestaurant.averageSalary > bestRestaurantResult) {
             bestRestaurant = {
                name,
                workers: currentRestaurant.workers,
                bestSalary: currentRestaurant.bestSalary,
                averageSalary: currentRestaurant.averageSalary,
             };
             bestRestaurantResult = currentRestaurant.averageSalary;
          }
       }
 
       bestRestaurantElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${Number(bestRestaurant.bestSalary).toFixed(2)}`;
 
       const result = [];
       Array.from(bestRestaurant.workers, worker => {
          result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
       });
       bestWorkersElement.textContent = result.join(' ');
 
    }
 }