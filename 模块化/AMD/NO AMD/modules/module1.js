(function(window){
    let name = 'no amd'
    function func() {
        console.log('module1 = ', name);
    }
    window.module1 = func
})(window)