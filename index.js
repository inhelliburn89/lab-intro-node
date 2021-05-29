class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => {
      return a - b;
    })
  }

  get(pos) {
    if (!this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  
  }

  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');

    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');

    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a,b) => a+b,0)
  }

  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');

    }
    return (this.sum()/this.length)
  }
}

module.exports = SortedList;
