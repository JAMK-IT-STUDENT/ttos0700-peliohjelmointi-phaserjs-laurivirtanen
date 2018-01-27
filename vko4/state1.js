demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff0000';
        console.log('state 1');
         addChangeStateEventListeners();
    },
    update: function(){}
};