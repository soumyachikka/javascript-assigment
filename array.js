function range (start, end, step) 
{
  arr = [];
 
  if (start < end)
  {
    var min = start;
    var max = end;
  }
  else 
  {
    var min = end;
    var max = start;
  }
 
  if (arguments.length <= 2) 
  {
 
      for (var i = min; i <= max; i++)
      {
 
       arr.push(i);
 
      }
 
  }
 
  else 
 
  {
 
    if (step > 0)
    {
      for (var i = min; i <= max; i = i + step)
      {
 
       arr.push(i);
 
      }
    }
    else 
    {
      for (var i = min; i <= max; i = i - step)
      {
 
       arr.unshift(i);
 
      }
    }
  }
 
  return arr;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
 
