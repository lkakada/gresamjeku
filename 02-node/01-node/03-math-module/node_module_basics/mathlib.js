module.exports = function(){
    return{
        add: function(num1, num2) { 
            return num1+num2;
       },
       multiply: function(num1, num2) {
            return num1*num2; 
       },
       square: function(num) {
            return num*num;
       },
       random: function(num1, num2) {
            if(num1 > num2){
                //return Math.floor(Math.random()*(max-min+1)+min);
                return Math.floor(Math.random()*(num1 - num2 + 1) + num2);
            }
            else{
                return Math.floor(Math.random()*(num2 - num1 + 1) + num1);
            }
       }
    }
};