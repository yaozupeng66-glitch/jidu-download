const journeyArt = document.querySelector(".journey-art");
const journeySteps = [...document.querySelectorAll(".journey-step")];

if (journeyArt && journeySteps.length) {
  for (const step of journeySteps) {
    step.addEventListener("click", () => {
      const selected = step.dataset.step;
      journeyArt.dataset.step = selected;
      journeyArt.classList.remove("is-replaying");
      // Replay the small ink mark even when the same step is chosen twice.
      void journeyArt.offsetWidth;
      journeyArt.classList.add("is-replaying");
      for (const item of journeySteps) item.setAttribute("aria-pressed", String(item === step));
    });
  }
}
