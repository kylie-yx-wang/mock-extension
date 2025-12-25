document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("textbox");
  const result = document.getElementById("result");
  const copyBtn = document.getElementById("copyBtn");
  
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
  
  copyBtn.addEventListener("click", async () => {
    const copiedText = result.textContent;
  
    if (!copiedText) return;
  
    try {
      await navigator.clipboard.writeText(copiedText);
      copyBtn.textContent = "Copied!";
      setTimeout(() => copyBtn.textContent = "Copy", 1000);
    } catch (err) {
      console.error(err);
    }
  });

});
