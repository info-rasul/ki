// @ts-nocheck
const useCard = (): void => {
  window.addEventListener("DOMContentLoaded", function () {
    let containers = document.querySelectorAll(".card__content");

    let screenWidth = window.innerWidth;

    containers.forEach((container) => {
      let textContainer = container.querySelector(".text-content");
      let toggleButton = container.querySelector(".hide-text");

      //  состояние текста как свёрнутое
      let isExpanded = false;
      textContainer.style.minHeight = "144px"; // Меняем minHeight на minHeight для корректной анимации
      textContainer.style.transition = "min-height 500ms"; // Добавляем анимацию

      toggleButton.textContent = "Читать полностью";

      toggleButton.addEventListener("click", function () {
        if (isExpanded) {
          // Сворачиваем текст
          textContainer.style.minHeight = "144px";
          toggleButton.textContent = "Читать полностью";
          textContainer.classList.add("max-md:line-clamp-6"); // Добовляем класс для троеточия
          toggleButton.setAttribute("aria-expanded", "false");
        } else {
          // Разворачиваем текст
          textContainer.style.minHeight = "290px"; // Анимируем изменение minHeight вместо minHeight
          toggleButton.textContent = "Скрыть";
          setTimeout(() => {
            textContainer.classList.remove("max-md:line-clamp-6"); // Удаляем класс для троеточия
          }, 500);
          toggleButton.setAttribute("aria-expanded", "true");
        }
        isExpanded = !isExpanded;
      });
    });
  });
};

export default useCard;
