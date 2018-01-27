demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#0000ff';
        console.log('state 3');
        addChangeStateEventListeners();
    },
    update: function(){}
};