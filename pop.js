document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("textbox");
  const result = document.getElementById("result");

  input.addEventListener("input", (e) => {
    const text = e.target.value;
    let newValue = "";

    for (let i = 0; i < text.length; i++) {
      newValue += (i % 2)
        ? text[i].toUpperCase()
        : text[i];
    }

    result.textContent = newValue;
  });
});
