demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#252622';
        console.log('state 7');
        addChangeStateEventListeners();
    },
    update: function(){}
};