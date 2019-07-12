const LinkedList = require('../linked-list').LinkedList;


describe('testing something()', () => {
  it('Insert method works', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.head.value).toEqual(4);
  })
  
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
});