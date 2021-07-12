/**
 * 解题思路：爬到第n阶可以在第n-1阶爬1个台阶或者在第n-2阶爬2个台阶，所以我们可以定义这样一个子问题：F(n) = F(n - 1) + F(n - 2);
 * 解题步骤：
 * （1）定义子问题：F(n) = F(n - 1) + F(n - 2);
 * （2）反复执行：从2循环到n，执行上述公式
 */

var climbStairs = function(n) {
    if (n < 2) {
        return 1;
    }
    //这里可以优化一下空间复杂度:我们直接定义两个临时变量
    let dp0 = 1;
    let dp1 = 1;
    // const dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        // dp[i] = dp[i - 1] + dp[i - 2];
        const temp = dp0;
        dp0 = dp1;
        dp1 = dp1 + temp;
    }
    return dp1;
};