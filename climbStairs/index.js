function climbStairs(n) {
  const dp = 0
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i < n.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}