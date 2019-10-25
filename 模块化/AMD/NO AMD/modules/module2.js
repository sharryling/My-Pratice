(function(window, module1){
    let name = 'no amd'
    function func() {
        console.log('module2 = ', name);
        module1()
    }
    window.module2 = func
})(window, module1)