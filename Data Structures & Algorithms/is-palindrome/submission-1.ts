class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // caret inside the bracket means negation, outside means beginning of the string, g flag means match all occurences
        const filteredString = s.replace(/[^a-zA-z0-9]/g, "");
        const targetString = filteredString.toLowerCase();
        let j = targetString.length - 1;
        for (const [i, char] of Array.from(targetString).entries()) {
            if (i < j && char !== targetString[j]) {
                return false;
            }
            j--;
        }
        return true;
    }
}
