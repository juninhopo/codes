array = [1,1,1,1,1,1,1,1,1,1,1,1,1,2,3]
target = 5

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        i = 0
        j = len(nums)-1

        while i < j:
            _sum = nums[i] + nums[j]  
        
            if _sum == target:
                return[i, j]
        
            if _sum > target:
                j-=1
            else:
                i+=1
        
        return []
    
