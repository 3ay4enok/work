$(function(){
    // "use strict";

    function user(a, b) {
      this.a = a;
      this.b = b;
    }

    var pete = new user("Петя", 25);

    alert( pete.b ); // 25
});