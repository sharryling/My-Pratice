define(['module1'], function(module1) {
    let name = 'I AM MODULE2'
    function func(){
        module1.func()
        console.log(name);
    }
    return {func}
});