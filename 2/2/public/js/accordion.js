const userData = [
  {
    title: 'Предпочтения',
    content: `<div class="user-info__item">
        <p class="user-info__item__title">Отношение к курению</p>
        <p class="user-info__item__value">Негативное</p>
      </div>
      <div class="user-info__item">
        <p class="user-info__item__title">Отношение к алкоголю</p>
        <p class="user-info__item__value">Негативное</p>
      </div>
      <div class="user-info__item">
        <p class="user-info__item__title">Отношение к спорту</p>
        <p class="user-info__item__value">Позитивное</p>
      </div>`
  },
  {
    title: 'О себе',
    content: `
        <p class="user-info__item__title">Хобби: Тренажерный зал</p>
        <p class="user-info__item__title">Студент МЦК-КТИТС</p>
        <p class="user-info__item__title">Люблю вкусно поесть</p>
      `
  },
];

function Accordion(data, element) {
  data.map(item => {
    const accordionElement = document.createElement('div');
    accordionElement.classList.add('accordion');
    accordionElement.innerHTML = `
      <button class="accordion__trigger transparent" onclick="triggerAccordion(event)">
        <p>${item.title}</p>
        <img src="./public/images/icons/add.svg" alt="add" class="accordion__trigger__icon">
      </button>
      <div class="accordion__container">
        <div class="accordion__content">
          ${item.content}
        </div>
      </div>
      `
    element.append(accordionElement);
  });
}

try {
  Accordion(userData, document.querySelector('#user-info'));
} catch (error) {
  console.log(error);
}

function triggerAccordion(event) {
  const accordionTriggerElement = event.currentTarget;
  const accordionElement = accordionTriggerElement.parentElement;
  const accordionContainerElement = accordionElement.querySelector('.accordion__container');

  if (accordionElement.classList.contains('open')) {
    accordionContainerElement.style.maxHeight = '';
  } else {
    accordionContainerElement.style.maxHeight = accordionContainerElement.scrollHeight + 'px';
  }

  accordionElement.classList.toggle('open');

  accordionTriggerElement.classList.toggle('selected');
}