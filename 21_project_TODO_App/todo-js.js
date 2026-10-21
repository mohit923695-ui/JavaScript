 let todolist = [
      {
        item: 'js',
        duedate: '2026-10-21'
      },
      {
        item: 'price',
        duedate: '2026-10-21'
      }
    ];

    displayitem();

    function addtodo() {
      let inputelement = document.querySelector('#todo-app');
      let dateelement = document.querySelector('#todo-date');

      let todoitem = inputelement.value;
      let tododate = dateelement.value;

      todolist.push({
        item: todoitem,
        duedate: tododate
      });

      inputelement.value = '';
      dateelement.value = '';

      displayitem();
    }

    function displayitem() {
      let containerelement = document.querySelector('.todo-container');

      let newhtml = ``;

      for (let i = 0; i < todolist.length; i++) {
        let { item, duedate } = todolist[i];

        newhtml += `
          <span>${item}</span>
          <span>${duedate}</span>
          <button class="btn-delete" onclick="todolist.splice(${i}, 1);
          displayitem();">Delete</button>
        `;
      }

      containerelement.innerHTML = newhtml;
    }