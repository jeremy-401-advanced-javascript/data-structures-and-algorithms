# Insertion Sort  
Insertion Sort JavaScript Data Structure and Algorithm

## Algorithm Description
Insertion Sort is an algorithm that takes an array and sort the items in the array in place. This assortment can be in ascending or descending order.

# Learning Objectives

* The learning objective for this blog is to help students understanding and program an insertion sort from scratch using Javascript.
* After completion a 301 student will be able to write and understand insertion sort and know why learning how to create a insertion sort is useful.


# Information Flow
* Start by picking the second element in the array
* Compare the second element with the one before it and swap if necessary
* Continue the next elements and compare again

# Diagram
<img src="./assets/images/InsertionSort.gif" width="400">


# Algorithm 
* If it is the first element, it is already sorted. return 1;
* Pick next element
*  Compare with all elements in the sorted sub-list
* Shift all the elements in the sorted sub-list that is greater than the value to be sorted
* Insert the value
* Repeat until list is sorted

# Pseudocode
`code( 
   InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
)`



## Approach & Efficiency
spliting of array using recursion space complextity is O(n). The time complexity is o(n log n).

# Reading and References

## Video

[Youtube: Video of Insertion Sort](https://www.youtube.com/watch?v=ArPCGZRXXc0)

## Readings

[Medium Article: Algorithms: Insertion Sort in JavaScript](https://medium.com/dailyjs/insertion-sort-in-javascript-9c077844717a)

[HackerNoon Article: Programming with JS: Insertion Sort](https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5)
