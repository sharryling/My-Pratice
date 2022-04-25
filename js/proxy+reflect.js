// let hero = {
//     name: '赵云',
//     hp: 100,
//     sp: 100,
//     equipment: ['马', '长枪']
//   }
  
//   const handler = {
//     set(target, key, value, receiver) {
//       //内部调用对应的 Reflect 方法
//       const result = Reflect.set(target, key, value, receiver);
//       //执行观察者队列
//       observableArray.forEach(item => item());
//       return result;
//     }
//   }
  
//   //初始化Proxy对象，设置拦截操作
//   const createProxy = (obj) => new Proxy(obj, handler);
  
//   //初始化观察者队列
//   const observableArray = new Set();
  
//   const heroProxy = createProxy(hero);
  
//   //将监听函数加入队列
//   observableArray.add(() => {
//     console.log(heroProxy.name);
//   });

//   observableArray.add(() => {
//     console.log(heroProxy.equipment);
//   });
  
  
//   heroProxy.name = "黄忠";
//   heroProxy.name = "黄忠..";
  // --> 黄忠




  // 多重继承
  const people = {
    name: 'people',
    run() {
      console.log('people.run:', this.name);
    }
  };
  
  const powerMan = {
    name: 'powerMan',
    run() {
      console.log('powerMan.run:', this.name);
    },
    fight() {
      console.log('powerMan.fight:', this.name);
    }
  };
  
  const handler = {
    get(target, name, receiver) {
        console.log('___', target);
      if (Reflect.has(target, name)) {
        return Reflect.get(target, name, receiver);
      }
      else {
        for (let P of target[Symbol.for('[[Prototype]]')]) {
            console.log('pp', P)
          if (Reflect.has(P, name)) {
            return Reflect.get(P, name, receiver);
          }
        }
      }
    }
  };
  
  const hero = new Proxy({
    name: 'hero',
    strike() {
      this.run();
      this.fight();
    }
  }, handler);
  hero[Symbol.for('[[Prototype]]')] = [people, powerMan];
  hero.strike();
  // --> people.run:hero
  // --> powerMan.fight:hero