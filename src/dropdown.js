const dropdown = (toggleId, listId) => {
  const toggle = document.getElementById(toggleId);
  const list = document.getElementById(listId);

  if (toggle && list) {
    list.classList.add('hidden'); // Hide initially

    toggle.addEventListener('click', () => {
      list.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
      if (!toggle.contains(event.target) && !list.contains(event.target)) {
        list.classList.add('hidden');
      }
    });
  }
};

export default dropdown;
