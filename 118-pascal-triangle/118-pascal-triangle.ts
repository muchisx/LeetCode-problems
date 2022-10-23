// https://leetcode.com/problems/pascals-triangle/


// * WIP - Not final yet


const generate = (numRows: number): number[][] => {
  
  const pascalTree: number[][] = [];

  if (1 <= numRows && numRows <= 30) {

    for (let i: number = 0; i < numRows; i++) {
      
      const ii: number = i + 1;

      pascalTree.push([1])

    }
  }

  

  return pascalTree
}

generate(3);
