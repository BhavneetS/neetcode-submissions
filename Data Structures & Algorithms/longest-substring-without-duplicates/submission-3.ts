class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        let hasAlphabet = new Set();
        let max = 0;
        // abcabdcbb
        for (let right = 0; right < s.length; right++) {
        
            // if the alphabet is repeating, remove the elements from the left till the repeating element is removed as we need a continuous sequence
            while(hasAlphabet.has(s[right])) {
                hasAlphabet.delete(s[left]);
                left++;
            }
            // when the alphabet is unique, add it to set 
            hasAlphabet.add(s[right]);
            max  = Math.max(max, right-left+1);
        }

        return max;
    }
}
