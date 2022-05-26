const utils = {
    extend(a,b, context) {
      for(let key in b) {
        if (b.hasOwnProperty(key)) {
          if (typeof b[key] === 'function') {
            a[key] = b[key].bind(context);
          } else {
            a[key] = b[key]
          }
        }
        
      }
    }
  }
  
class Axios {
    constructor() {
        this.interceptors = {
            request: new InterceptorsManage,
            response: new InterceptorsManage
        }
    }
    request(config) {
        return new Promise((resolve) => {
            const { method = '', url = '', data = {}, header = {} } = config
            const xhr = new XMLHttpRequest()
            xhr.open(method, url, true)
            xhr.send(data)
            xhr.onreadystatechange('')
            xhr.onload = () => {
                resolve(xhr.responseText)
            }
        })
    }
}

// axios.get('xxxx', {
//     cancelToken: new CancelToken(function executor(c) {
//       cancel = c;
//     })
//   });

const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post'];
methodsArr.forEach(met => {
    Axios.prototype[met] = function() {
        console.log('执行'+met+'方法');
        // 处理单个方法
        if (['get', 'delete', 'head', 'options'].includes(met)) { // 2个参数(url[, config])
            return this.request({
                method: met,
                url: arguments[0],
                ...arguments[1] || {}
            })
        } else { // 3个参数(url[,data[,config]])
            return this.request({
                method: met,
                url: arguments[0],
                data: arguments[1] || {},
                ...arguments[2] || {}
            })
        }

    }
})

class InterceptorsManage {
    constructor() {
      this.handlers = [];
    }
  
    use(fullfield, rejected) {
      this.handlers.push({
        fullfield,
        rejected
      })
    }
  }
  
//   链接：https://juejin.cn/post/6856706569263677447
  


// 最终导出axios的方法，即实例的request方法
function CreateAxiosFn() {
    let axios = new Axios();
    let req = axios.request.bind(axios);
    // 增加代码
    utils.extend(req, Axios.prototype, axios)

    return req;
}

// 得到最后的全局变量axios
let axios = CreateAxiosFn();