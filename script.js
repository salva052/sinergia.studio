// Efecto de desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Ajusta el desplazamiento para compensar el encabezado
        behavior: "smooth",
      });
    }
  });
});

// Resaltar sección activa en el menú mientras se desplaza
const menuLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  menuLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) {
      const sectionTop = section.offsetTop - 60;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});

// Efecto flotante para los elementos decorativos
document.querySelectorAll(".decorative-circle").forEach((circle) => {
  const animationDuration = Math.random() * 5 + 3; // Duración entre 3 y 8 segundos
  const animationDelay = Math.random() * 3; // Retraso entre 0 y 3 segundos

  circle.style.animation = `float ${animationDuration}s ease-in-out infinite`;
  circle.style.animationDelay = `${animationDelay}s`;
});

// Agregar keyframes para el efecto flotante directamente desde JavaScript
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
`;
document.head.appendChild(style);