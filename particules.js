const particleContainer = document.getElementById('particle-container');
    const particleCount = 100;
    const particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() * 1) - 0.5;
        this.speedY = (Math.random() * 1) - 0.5;
        this.element = document.createElement('div');
        this.element.classList.add('particle');
        particleContainer.appendChild(this.element);
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.02;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        if (this.size <= 0.2) {
          this.element.remove();
          particles.splice(particles.indexOf(this), 1);
          particles.push(new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight));
        }
      }
    }

    function initParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight));
      }
    }

    function animateParticles() {
      particles.forEach(particle => particle.update());
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();