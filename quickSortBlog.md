# Quick Sort 
Quick Sort JavaScript Data Structure and Algorithm

## Algorithm Description

Definition - What does Quicksort mean?
Quicksort is a popular sorting algorithm that is often faster in practice compared to other sorting algorithms. It utilizes a divide-and-conquer strategy to quickly sort data items by dividing a large array into two smaller arrays. It was developed by Charles Antony Richard Hoare (commonly known as C.A.R. Hoare or Tony Hoare) in 1960 for a project on machine translation for the National Physical Laboratory.

# Learning Objectives

* The learning objective for this blog is to help students understanding and program a quick sort from scratch using Javascript.
* After completion a 301 student will be able to write and understand quick sort and know why learning how to create a quick sort is useful.


# Information Flow
* Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
* Works by selectin one element(called the 'pivot') and finding the index where the pivot should end up in the sorted array.
* Once the pivot is positioned appropriately, quick sort can applied on either side of the pivot.

# Diagram
<img src="./assets/images/QuickSort.gif" width="400">


# Algorithm 
* First find the "pivot" element in the array.
* Start the left pointer at first element of the array.
* Start the right pointer at last element of the array.
* Compare the element pointing with left pointer and if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.
* Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.
* Check if left pointer is less than or equal to right pointer, then saw the elements in locations of these pointers.
* Increment the left pointer and decrement the right pointer.
* If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.

# Pseudocode
`code( 
  unction partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}
)`



## Approach & Efficiency
spliting of array using recursion space complextity is O(n). The time complexity is o(n log n).

# Reading and References

## Video

[Youtube: Video of Quick Sort](https://www.youtube.com/watch?v=eqo2LxRADhU)

## Readings
[Humans Who Code Article: Computer science in JavaScript: Quicksort](https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/)

[Khan4019.github.io: Merge Sort Algorithm in JavaScript](https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort)
