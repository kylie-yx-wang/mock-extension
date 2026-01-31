document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("textbox");
    const result = document.getElementById("result");
    const copyBtn = document.getElementById("copyBtn");
    const Modes = {
        LOWER: 'LOWER',
        UPPER: 'UPPER',
        MOCK: 'MOCK',
        CLAP: 'CLAP',
        SPACE: 'SPACE',
        EMOJI: 'EMOJI',
        REPEAT: 'REPEAT',
        CUSTOM: 'CUSTOM',
    }
    const mode = 0;
    const emojis = [
        "😀","😂","🥹","😎","🤯","😈","👀","💀","🔥","✨",
        "🍕","🍜","🍩","🍓","🥑",
        "🐸","🐶","🐱","🦊","🐼",
        "🚀","🌈","⚡","💡","🎉","🔞"
    ];

    function lowerCase() {
        const text = e.target.value;
        result.textContent = text.toLowerCase();
    }

    function upperCase() {
        const text = e.target.value;
        result.textContent = text.toUpperCase();
    }

    function mockCase() {
        const text = e.target.value;
        let newValue = "";
    
        for (let i = 0; i < text.length; i++) {
          if (text[i] == 'i' || (i+1 < text.length && text[i+1] == 'l')) {
              newValue += text[i];
          } else {
              newValue += (i % 2)
                  ? text[i].toUpperCase()
                  : text[i];
          }
        }
    
        result.textContent = newValue;
    }

    function clapCase() {
        const text = e.target.value;
        let newValue = "";
        for (i = 0; i < text.length; i++) {
            newValue += (text[i] == " ") ? 
                text[i] : " &#128079; "
        }

        result.textContent = newValue;
    }

    function spaceCase() {
        const text = e.target.value;
        let newValue = "";
        for (i = 0; i < text.length; i++) {
            newValue += text[i];
            newValue += " ";
        }

        result.textContent = newValue;
    }

    function emojiCase() {
        const text = e.target.value;
        let newValue = "";
        for (i = 0; i < text.length; i++) {
            newValue += text[i];
            newValue += emojis[Math.floor(Math.random()*emojis.length)];
        }

        result.textContent = newValue;
    }
    
    function repeatCase() {

    }

    function customCase() {

    }

    input.addEventListener("input", (e) => {
      switch(mode) {
        case Modes.LOWER:
            lowerCase(); break;
        case Modes.UPPER:
            upperCase(); break;
        case Modes.MOCK:
            mockCase(); break;
        case Modes.CLAP:
            clapCase(); break;
        case Modes.SPACE:
            spaceCase(); break;
        case Modes.EMOJI:
            emojiCase(); break;
        case Modes.REPEAT:
            repeatCase(); break;
        case Modes.CUSTOM:
            customCase(); break;
        default:
            result.textContent = e.target.value;
      }
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
