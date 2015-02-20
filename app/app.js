define([
  'views/todos/todos',
  'views/categories/categories',
  'views/newTodo/newTodo',
  'views/newCategory/newCategory'
], function () {

  // create a global container object
  var APP = window.APP = window.APP || {};

  var init = function () {

    // intialize the application
    APP.instance = new kendo.mobile.Application(document.body, { skin: 'flat' });
  
  };

  return {
    init: init
  };

});