/*
Write a function called printDepthFirst that will traverse the given graph
depth-first, printing each node when visited exactly once, on a newline.

Hint: How can you use your code from the breadth-first traversal to get a head
start writing your depth-first traversal?
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printDepthFirst(start) {

  //create stack for nodes available addidng first node
  let stack = [start];

  //crate a stack in the form of a set for the nodes visited
  let visited = new Set();

  //loop through stack with while loop for while stack has elements
  while(stack) {

  //take the node off of the top of the stack (pop off end of array) and store in variable
  let currNode = stack.pop();

  //print variable
  console.log(currNode);

  //ask if the neighbor is part of the visited set
  if(!visited[currNode])
  //if unvisited send to queue


}

// console.log("First Test:")
// printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
//                     // One possible solution:  3, 4, 6, 5, 2, 1
// console.log("Second Test:")
// printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
//                     // One possible solution:  6, 4, 5, 2, 3, 1
// console.log("Third Test:")
// printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
//                     // One possible solution:  4, 6, 5, 2, 3, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printDepthFirst;
