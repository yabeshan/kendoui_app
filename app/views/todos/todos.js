define([
  'views/view',
  'text!views/todos/todos.html'
], function (View, html) {

  var view, navbar, category;

  var todos = new kendo.data.DataSource({
    data: [
      { title: 'Talk to corporate', category: 'Work' },
      { title: 'Promote synergy', category: 'Work' },
      { title: 'Eat a bagel', category: 'Personal' },
      { title: 'Eat some chicken strips', category: 'Personal' }
    ]
  });

  var model = kendo.observable({
    todos: todos
  });

  var events = {
    init: function (e) {
      navbar = e.view.header.find('.km-navbar').data('kendoMobileNavBar');
    },
    afterShow: function (e) {
      category = e.view.params.category || 'Work';
      todos.filter({ field: 'category', operator: 'eq', value: category });
      navbar.title(category);
    }
  };

  view = new View('todos', html, model, events);

  $.subscribe('/newTodo/add', function (e, text) {
    todos.add({ title: text, category: category });
  });

});