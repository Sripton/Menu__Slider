window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelectorAll(".section"),
    section__wrapper = document.querySelector(".section__wrapper"),
    section__inner = document.querySelector(".section__inner"),
    lengthSection = section.length,
    heigthWrapper = window.getComputedStyle(section__wrapper).height,
    btn__next = document.querySelector(".btn__next"),
    btn__prev = document.querySelector(".btn__prev"),
    header__nav = document.querySelector(".header__nav");
  let sliderIndex = 1;
  let offsetSlide = 0;
  section__inner.style.height = `${100 * lengthSection}%`;

  section__inner.style.display = "flex";
  section__inner.style.flexDirection = "column";
  section__wrapper.style.overflow = "hidden";
  section__inner.style.transition = "0.8s all";
  section__wrapper.style.position = "relative";

  const data__slide = document.querySelectorAll("[data-slide-to]");
  data__slide.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
      const eventTarget = e.target.getAttribute("data-slide-to");
      sliderIndex = index;
      sliderIndex++;
      offsetSlide =
        +heigthWrapper.slice(0, heigthWrapper.length - 2) * (sliderIndex - 1);
        section__inner.style.transform = `translateY(-${offsetSlide}px)`;
    });
  });
});
