class Snapshot {
  constructor(array) {
    this.array = array;
    this.coppyArr = [...array];
  }

  restore() {
    this.array = [...this.coppyArr];
    return this.array;
  }
}

var array = [1, 2];
var snap = new Snapshot(array);
array[0] = 3;
array = snap.restore();
console.log(array.join()); //It should log "1,2"
array.push(4);
array = snap.restore();
console.log(array.join()); //It should log "1,2"
