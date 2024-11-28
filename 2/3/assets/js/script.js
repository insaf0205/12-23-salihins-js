const faq = document.querySelector('.faq');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');
const closeModalForeverButton = document.getElementById('close-modal-forever');

let modalClosedForever = localStorage.getItem('modalClosedForever') === 'true';

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.3 && !modalClosedForever) {
      showModal();
    }
  });
}, { threshold: 0.3 });

observer.observe(faq);

function showModal() {
  modal.style.display = 'block';
}

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
  // Ничего не делаем с localStorage - модальное окно появится снова при прокрутке
});

closeModalForeverButton.addEventListener('click', () => {
  modal.style.display = 'none';
  localStorage.setItem('modalClosedForever', 'true');
});

