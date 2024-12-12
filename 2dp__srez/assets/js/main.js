// Аккордеоны
function toggleAccordion(trigger) {
    const accordion = trigger.closest('.accordion');
    accordion.classList.toggle('open');
  }
  
  // Услуги Хэдер

    // ========== Аккордеон для блока "Услуги" ==========
const servicesDropdown = document.querySelector(".link_expand");
const servicesContent = document.querySelector(".link_expand__content");

// Переключение видимости вложенного меню (аккордеон) по клику
servicesDropdown.addEventListener("click", (event) => {
  event.preventDefault();
  servicesContent.style.display = servicesContent.style.display === "flex" ? "none" : "flex";
});

  // Модальное окно
  function openModal() {
    document.getElementById('make_request').showModal();
  }
  
  function closeModal() {
    document.getElementById('make_request').close();
  }
  
  // Форма записи на фотосессию
  document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = e.target.email.value;
    
    // Валидация email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Пожалуйста, введите корректный email.');
      return;
    }
  
    // Отправка fetch запроса
    fetch('/submit', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Ваша заявка успешно отправлена!');
        closeModal();
      } else {
        alert('Произошла ошибка. Попробуйте снова.');
      }
    })
    .catch(error => alert('Произошла ошибка. Попробуйте снова.'));
  });
  const linkExpand = document.querySelectorAll('.link_expand');
    linkExpand.forEach(link => {
        link.addEventListener('mouseover', () => {
            const content = link.querySelector('.link_expand__content');
            content.style.display = 'block';
        });
        link.addEventListener('mouseout', () => {
            const content = link.querySelector('.link_expand__content');
            content.style.display = 'none';
        });
    });
  