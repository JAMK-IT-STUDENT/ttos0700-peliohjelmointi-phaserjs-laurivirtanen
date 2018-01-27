demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffffff';
        console.log('state 9');
        addChangeStateEventListeners();
    },
    update: function(){}
};