function* idMaker(){
    var index = 0;
    while(index<3)
      yield index++;
  }
  
  var gen = idMaker();
  console.log(gen.next()); // 0
  console.log(gen.next()); // 1
  console.log(gen.next()); // 2
  console.log(gen.next()); // undefined


  