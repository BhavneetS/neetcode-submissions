class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let index = -1;
        let [right, left] = [nums.length - 1, 0];
        if(nums.length === 1) {
            if(nums[0] === target) {
                return 0;
            } else {
                return -1;
            }
        } 
        console.log(`right outside is ${right}, left is ${left}`);

        while (nums[right !== 1 ? Math.ceil(right / 2) : 0] >= target && right > left) {
            right = right !== 1 ? Math.ceil(right / 2) : 0;
            console.log(`right in first while is ${right}, left is ${left}`);
            if (nums[right] === target) {
                index = right;
                console.log(`index is ${index}`);
                return index;
            }
        }

        while (nums[Math.ceil((right + left) / 2)] <= target && right > left) {
            console.log(`first right is second while ${right}, left is ${left}`);
            left = Math.ceil((right + left) / 2);
            // right = right - Math.ceil(left/2);
            console.log(`second right is second while ${right}, left is ${left}`);
            if (nums[left] === target) {
                index = left;

                // console.log(`index second is ${index}, left is ${left}`)
                return index;
            }
        }

        return index;
    }
}
