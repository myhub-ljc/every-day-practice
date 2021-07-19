/**
 * 解题思路：
 * f(k) = 从前k个房屋中能偷窃到的最大数额
 * A(k) = 第k个房屋的钱数
 * f(k) = max(f(k - 2) + Ak,  f(k - 1)
 * 考虑使用动态规划
 * 
 * 解题步骤：
 * （1）定义子问题：f(k) = max(f(k - 2) + Ak, f(k - 1))
 * （2）反复执行：从2循环到n，执行上述公式
 */

 var rob = function(nums) {
    // //如果nums为空的话，直接返回0
    // if(nums.length === 0) {
    //     return 0;
    // }

    // const dp = [0, nums[0]];
    // //从第2项开始，依次循环遍历 
    // for(let i = 2; i <= nums.length; i++) {
    //     //套用我们的公式(一种情况是自身的值+前i-2项的最大值，另外一种情况是跳过自身：直接计算前i项的最大值)
    //     dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
    // }
    // return dp[nums.length];

    // /*
    //     时间复杂度：O(n)
    //     空间复杂度：O(n)
    // */

    //我们也可以稍微来优化一下
    if(nums.length === 0) {
        return 0;
    }

    //定义两个临时变量
    let dp0 = 0;
    let dp1 = nums[0];
    for(let i = 2; i <= nums.length; i++) {
        const dp2 = Math.max(dp0 + nums[i - 1], dp1);
        dp0 = dp1;
        dp1 = dp2;
    }
    return dp1;

    /*
      时间复杂度：O(n)
      空间复杂度：O(n)
    */
};