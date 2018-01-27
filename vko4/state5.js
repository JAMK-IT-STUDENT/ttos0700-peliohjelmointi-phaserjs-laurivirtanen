demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#503580';
        console.log('state 5');
        addChangeStateEventListeners();
    },
    update: function(){}
};