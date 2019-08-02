const LinkedList = require('./../linked-list.js').LinkedList;
const mergeLinkedLists = require('./../linked-list.js').mergeLinkedLists;



describe('testing something()', () => {

  test('Linked list should be empty upon creation', () => {
    let list = new LinkedList();
    expect(list.head).toBeFalsy();
  })

  test('Testing mutiple node insertion for append method', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.head.next.next.next).toBeTruthy()
  });

  test('Testing for value at end of append method', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.head.next.next.next.value).toEqual(4);
  })
  
  // Insert List Testing
  
  test('Insert Method should point to head', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(4)
    expect(list.head.value).toEqual(4);
  })

  test('Testing mutiple node insertion for append method', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.head.next.next.next).toBeTruthy()
  });

  // Includes List Testing

  test('Testing includes method for finding a specific value', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.includes(4)).toBeTruthy();
  })

  test('Testing includes to return false if value does not exist in LL', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.includes(5)).toBeFalsy();
  });

  // ToString List Testing 

  test('Testing toString method to see if value becomes a string', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.toString()).toBe('4321');
  });

  // Insert After List Testing
  
  it('Insert after method works', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insertAfter(3,9);
    expect(list.head.value).toEqual(4);
    expect(list.head.next.next.value).toEqual(9); 
  })

  // Insert Before List Testing 

  it('Insert before method works', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insertBefore(3,9);
    expect(list.head.next.value).toEqual(9); 
  })

  it('Insert before method to be be', () => {
    let list = new LinkedList();
    expect(list.insertBefore(0, 9)).toBeFalsy();
  })



// Merge List Testing

  it('Should merge the values of 2 linked lists', () => {
    let l1 = new LinkedList();
    let l2 = new LinkedList();

    l1.append(5);
    l1.append(3);
    l1.append(1);
    l2.append(2);
    l2.append(4);
    l2.append(6);

    expect(mergeLinkedLists(l1, l2).value).toBe(5);
  });

  it('Merge list should consist of objects', () => {
    let l1 = [1,2,3,4,5];
    let l2 = [6,7,8,9,10];
    expect(mergeLinkedLists(l1,l2)).toEqual(null);
  })

// From End List TEST

it('If value is less the length should return expected value', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(33);
  expect(list.fromEnd(3)).toEqual(3);
});

it('If value is greater than the length of LL return undefined', () => {
  let list = new LinkedList();
  list.append(5);
  list.append(3);
  list.append(7);
  list.append(10);
  list.append(33);
  expect(list.fromEnd(5)).toBeUndefined();
});



});

