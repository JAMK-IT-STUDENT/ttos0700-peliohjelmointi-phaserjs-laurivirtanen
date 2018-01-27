demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#220ff0';
        console.log('state 4');
        addChangeStateEventListeners();
    },
    update: function(){}
};