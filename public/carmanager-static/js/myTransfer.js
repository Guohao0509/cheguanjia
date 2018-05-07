function MyTransfer(options) {
  this.content = document.getElementById(options.content); //容器
  this.data = options.data;  //数据
  this.form = options.form; //layui from对象
  this.undoList = [];
  this.todoList = [];
}

MyTransfer.prototype = {
  getUndoList: function () {
    return this.undoList;
  },
  getTodoList: function () {
    return this.todoList;
  }
}