function saveTodos() {
  const todos = [];
  document.querySelectorAll('#ft_list .todo').forEach(todo => {
    // ดึงเฉพาะข้อความ (ไม่รวมปุ่ม)
    const text = todo.querySelector('.text');
    if (text) todos.push(text.textContent);
  });
  
}

function addTodo(text, save = true) {
  if (!text) return;

  const ft_list = document.getElementById('ft_list');
  const div = document.createElement('div');
  div.className = 'todo';

  // สร้าง span สำหรับข้อความ
  const span = document.createElement('span');
  span.className = 'text';
  span.textContent = text;

  // สร้างปุ่มลบ
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '🗑️';
  removeBtn.style.marginLeft = '12px';
  removeBtn.style.float = 'right';
  removeBtn.onclick = function (e) {
    e.stopPropagation(); // ป้องกันไม่ให้ trigger event อื่น
    if (confirm('Do you want to remove this TO DO?')) {
      div.remove();
      saveTodos();
    }
  };

  // เพิ่ม span และปุ่มเข้าไปใน div
  div.appendChild(span);
  div.appendChild(removeBtn);



  ft_list.insertBefore(div, ft_list.firstChild);

  if (save) saveTodos();
}

document.getElementById('new-btn').onclick = function () {
  const text = prompt('Enter a new TO DO:');
  if (text && text.trim() !== '') {
    addTodo(text.trim());
  }
};
