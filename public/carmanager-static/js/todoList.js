layui.define(['element', 'common', 'laytpl'], function (exports) {
  // 复制指令
  var $ = layui.jquery;
  var element = layui.element();
  var laytpl = layui.laytpl;
  function unique(array, key) {
    var tmp = {}
    for (var i = 0; i < array.length; i++) {
      var tmpKey = array[i][key];
      if (!tmp[tmpKey]) {
        tmp[tmpKey] = true;
      } else {
        array.splice(i, 0);
        i--;
      }
    }
    return array;
  }
  var TodoList = function (key) {
    this.todo = [];
    this.undo = [];
    this.key = key;
    this.flag = 'flag' + Math.random().toString(32).substr(3);
  };
  TodoList.prototype = {
    setTodo: function (list) {
      this.todo = this.todo.concat(list);
      // this.todo = unique(this.todo, this.key);
    },
    getTodo: function () {
      return this.todo;
    },
    selectPreMoveItem: function (item) {
      for (var i = 0; i < this.todo.length; i ++) {
        if (item[key] == this.todo[i][key]) {
          this.todo[i][flag] = true;
        }
      }
    },
    remove: function () {
      for (var i = 0; i < this.todo.length; i ++) {
        if (this.todo[i][flag]) {
          this.todo.splice(i, 1);
          i--;
        }
      }
    }
  }
  exports('TodoList', function () {
    return TodoList;
  });
});