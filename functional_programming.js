
function sumOfSquares(array)
{
  return array.map( x=> square( x ) ).reduce( (sum_,x) => sum_ + x )
}
function sumOfCubes(array)
{
  return array.map(x=>cube(x)).reduce((sum_,x)=>sum_+x)
}
function sumOfCube(array,f)
{
  return array.map(y=>f(y)).reduce((sum_,y)=>sum_+y)
}

const square=x=>x*x
const cube=x=>square(x)*x
const sum=arr=>arr.reduce((acc,x)=>acc+x)

console.log('sum of 5,6,7,8 is '+sum([5,6,7,8]))
console.log('sum of Squares of 3,4,5 is  '+sumOfSquares([3,4,5]))
console.log('Sum of Cubes of 1,2,3,4 is  : ' + sumOfCubes([1,2,3,4]))
console.log('Sum of Cubes(1,2,3)(Passing function as argument) : '+sumOfCube([1,2,3],cube))
