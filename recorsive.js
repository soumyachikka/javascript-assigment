function isEven(x) 
{
  if (x < 0 ) {
        return false
  }
   else if (x % 2 == 0) {
        return true
  } else {
        return isEven(x-2)
  }
}
