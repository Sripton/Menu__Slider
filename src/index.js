window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelectorAll(".section"),
    section__wrapper = document.querySelector(".section__wrapper"),
    section__inner = document.querySelector(".section__inner"),
    lengthSection = section.length,
    heigthWrapper = window.getComputedStyle(section__wrapper).height;
  let sliderIndex;
  let offsetSlide = 0;
  section__inner.style.height = `${100 * lengthSection}%`;

  section__inner.style.display = "flex";
  section__inner.style.flexDirection = "column";
  section__wrapper.style.overflow = "hidden";
  section__inner.style.transition = "0.5s all";
  section__wrapper.style.position = "relative";

  const data__slide = document.querySelectorAll("[data-slide-to]");
  data__slide.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      sliderIndex = index;
      sliderIndex++;
      offsetSlide =
        +heigthWrapper.slice(0, heigthWrapper.length - 2) * (sliderIndex - 1);
      section__inner.style.transform = `translateY(-${offsetSlide}px)`;
    });
  });
});
