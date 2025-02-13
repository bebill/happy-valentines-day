document.addEventListener("DOMContentLoaded", () => {
  const typewriterElement = document.getElementById("typewriter")
  const heartSpan = document.getElementById("heartSpan")

  const text = `
  MY LOVE, MY VALENTINE
  
  Hey Baby,
  
  Today, I'm offering you something a little different.
  A rose. 🌹
  But not just any rose. A piece of code, a little bloom, something crafted just for you.
  And it's not just a flower;
  It's a reminder that even in the language of logic and lines,
  My love for you always finds its way.
  
  But it's not the only surprise!
  You've been patient,
  And I know waiting isn't your favorite thing.
  Thank you baby.
  So now, it's time for the reveal!
  Your chocolates?
  They've been hiding in plain sight, right where Sofi kept them safe. 🤭
  Because even when I'm not there,
  There's always a little part of me looking out for you.
  
  Loving you isn't just about grand gestures or gifts.
  It's in the efforts, in the little things.
  Like writing a rose in a code, making sure your surprise reaches you,
  And thanking you for just being you.
  
  Happy Valentine's Day, my Love. You're my favorite part of every day. 💙
  
  Now if you want a clue as to where your gifts are, you can touch the heart below...
  (And if it's too hard or you're just too impatient, either ask Sofi or me lol).`

  let index = 0

  function typeWriter() {
    if (index < text.length) {
      // Ajoute le caractère suivant
      typewriterElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor"> </span>';
      index++;
      setTimeout(typeWriter, 50); // Vitesse de frappe (50ms)
    } else {
      // Supprime le curseur une fois le texte terminé
      typewriterElement.innerHTML = text;
    }
  }

  // Démarrer l'effet typewriter
  typeWriter();

  // Show the heart after 30 seconds
  setTimeout(() => {
    heartSpan.style.display = "block"
  }, 60000)
})

