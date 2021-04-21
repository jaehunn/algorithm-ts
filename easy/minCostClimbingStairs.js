/**
 * @param {number[]} costs
 * @return {number}
 */

// top-down
{
  function minCostClimbingStairs(costs) {
    return Math.min(minCostClimbingStairsHelper(0), minCostClimbingStairsHelper(1));

    function minCostClimbingStairsHelper(startIndex) {
      if (costs.length <= startIndex) return 0;

      return (
        costs[startIndex] +
        Math.min(minCostClimbingStairsHelper(startIndex + 1), minCostClimbingStairsHelper(startIndex + 2))
      );
    }
  }
}

{
  function minCostClimbingStairs(costs) {
    const Memo = {};

    return Math.min(minCostClimbingStairsHelper(0), minCostClimbingStairsHelper(1));

    function minCostClimbingStairsHelper(startIndex) {
      if (Memo[startIndex]) return Memo[startIndex];
      if (costs.length <= startIndex) return (Memo[startIndex] = 0);

      return (Memo[startIndex] =
        costs[startIndex] +
        Math.min(minCostClimbingStairsHelper(startIndex + 1), minCostClimbingStairsHelper(startIndex + 2)));
    }
  }
}

// bottom-up
{
  function minCostClimbingStairs(costs, len = costs.length) {
    let accMinCosts = new Array(len).fill(0);

    accMinCosts[0] = costs[0];
    accMinCosts[1] = costs[1];
    for (let index = 2; index < len; index += 1) {
      accMinCosts[index] = costs[index] + Math.min(accMinCosts[index - 2], accMinCosts[index - 1]);
    }

    return Math.min(accMinCosts[len - 2], accMinCosts[len - 1]);
  }
}

{
  function minCostClimbingStairs(costs, len = costs.length) {
    let first = costs[0];
    let second = costs[1];

    for (let index = 2; index < len; index += 1) {
      [first, second] = [second, costs[index] + Math.min(first, second)];
    }

    return Math.min(first, second);
  }
}
