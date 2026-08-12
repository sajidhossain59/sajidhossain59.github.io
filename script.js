const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "হ্যালো",
  "Ciao",
  "こんにちは",
  "مرحبا",
  "Olá"
];

const greeting = document.getElementById("greeting");

if (greeting) {
  let index = 0;

  setInterval(() => {
    greeting.classList.add("hide");

    setTimeout(() => {
      index = (index + 1) % greetings.length;
      greeting.textContent = greetings[index];
      greeting.classList.remove("hide");
    }, 1000);
  }, 3000);
}
