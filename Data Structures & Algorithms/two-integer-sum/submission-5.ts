class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
      
        let numMap = new Map<number, number>();

        for (const [index, num] of nums.entries()) {
            let diff = target - num;
            if (numMap.has(diff)) {
                return [numMap.get(diff), index];
            } else numMap.set(num, index);
        }
        return [];
    }
}
