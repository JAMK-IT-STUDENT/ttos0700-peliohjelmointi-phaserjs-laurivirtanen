demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff0080';
        console.log('state 2');
        addChangeStateEventListeners();
    },
    update: function(){}
};