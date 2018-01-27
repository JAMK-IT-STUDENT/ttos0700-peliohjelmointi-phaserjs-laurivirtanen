demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#8962ff';
        console.log('state 8');
        addChangeStateEventListeners();
    },
    update: function(){}
};