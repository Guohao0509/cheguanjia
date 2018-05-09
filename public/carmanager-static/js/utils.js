layui.define([], function (exports) {
  var Utils = function () { };
  Utils.unique = function (array, key, callback) {
    var tmp = {}
    var repeatObj = [];
    for (var i = 0; i < array.length; i++) {
      var tmpKey = array[i][key];
      if (!tmp[tmpKey]) {
        tmp[tmpKey] = true;
      } else {
        repeatObj.push(array.splice(i, 1)[0]);
        i--;
      }
    }
    callback && callback(repeatObj);
    return array;
  }
  exports('Utils', function () {
    return Utils;
  });
});