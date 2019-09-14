# Merge Sort 
Merge Sort JavaScript Data Structure and Algorithm

## Algorithm Description
Merge Sort is an algorithm that takes in an array and sorts the array based on whatever specification you code it sort, i.e. ascending descending etc. We care about merge sort because of the speed in which it sorts. If you are dealing with huge datasets it will drastically decrease the time it takes to sort data without using merge sort.

# Learning Objectives

* The learning objective for this blog is to help students understanding and program a merge sort from scratch using Javascript.
* After completion a 301 student will be able to write and understand merge sort and know why learning how to create a merge sort is useful.


# Information Flow
* If it is only one element in the list it is already sorted, return.

* Divide the list recursively into two halves until it can no more be divided.
* Merge the smaller lists into new list in sorted order.

# Diagram
<img src="./assets/images/MergeSort.gif" width="400">


# Algorithm 
* MergeSort(arr[], l,  r)
If r > l
* Find the middle point to divide the array into two halves:
  * middle m = (l+r)/2
* Call mergeSort for first half:   
  * Call mergeSort(arr, l, m)
* Call mergeSort for second half:
  * Call mergeSort(arr, m+1, r)
* Merge the two halves sorted in step 2 and 3:
  * merge(arr, l, m, r)

# Pseudocode
`code( 
  ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

)`



## Approach & Efficiency
spliting of array using recursion space complextity is O(n). The time complexity is o(n log n).

# Reading and References

## Video

[Youtube: Video of Merge Sort](https://www.youtube.com/watch?time_continue=133&v=XaqR3G_NVoo)

## Readings
[Medium Article: A Simplified Explanation of Merge Sort](https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2)

[Medium Article: Merge Sort Algorithm in JavaScript](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)
