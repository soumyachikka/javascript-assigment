function range(start, end, step = start <= end ? 1 : -1) {
    let result = [];
    for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
      result.push(i);
    }
    return result;
  }
  
function sum(numbers) {
    result = 0;
    for (let num of numbers) {
      result += num;
    }
    return result;
  }
  
  console.log(range(1, 9));
  console.log(range(1, 5, 2));
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));
  