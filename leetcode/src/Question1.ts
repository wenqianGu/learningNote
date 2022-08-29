function twoSumQuadratic(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const firstNumber = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondNumber = nums[j];
      if (firstNumber + secondNumber === target) {
        return [i, j]
      }
    }
  }
  return []
}

function twoSumLinear(nums: number[], target: number): number[] {
  const seconds = {}
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    if(seconds[first] !== undefined){
      return [seconds[first], i]
    }
    const second = target - first
    seconds[second] = i;
  }
  return []
}

export default twoSumLinear;
