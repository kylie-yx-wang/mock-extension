document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("textbox");
    const result = document.getElementById("result");
    const copyBtn = document.getElementById("copyBtn");
    const modeSelect = document.getElementById("dropdown");
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
    let mode = Modes.LOWER;
    const emojis = [
        "😀","😂","🥹","😎","🤯","😈","👀","💀","🔥","✨",
        "🍕","🍜","🍩","🍓","🥑",
        "🐸","🐶","🐱","🦊","🐼",
        "🚀","🌈","⚡","💡","🎉","🔞"
    ];

    modeSelect.addEventListener("change", (e) => {
        mode = Modes[e.target.value];
        input.dispatchEvent(new Event("input"));
    });


    function lowerCase() {
        const text = input.value;
        result.innerText = text.toLowerCase();
    }

    function upperCase() {
        const text = input.value;
        result.innerText = text.toUpperCase();
    }

    function mockCase() {
        const text = input.value;
        let newValue = "";
    
        for (let i = 0; i < text.length; i++) {
          if ((text[i] != 'l') && (i % 2 == 0 || text[i] == 'i' || 
            (i+1 < text.length && text[i+1] == 'l'))) {
              newValue += text[i];
          } else {
              newValue += text[i].toUpperCase();
          }
        }
    
        result.innerText = newValue;
    }

    function clapCase() {
        const text = input.value;
        let newValue = "";
        for (i = 0; i < text.length; i++) {
            newValue += (text[i] == " ") ?
            " 👏 " : text[i];
        }

        result.innerText = newValue;
    }

    function spaceCase() {
        const text = input.value;
        let newValue = "";
        for (i = 0; i < text.length; i++) {
            newValue += text[i];
            newValue += " ";
        }

        result.innerText = newValue;
    }

    function emojiCase() {
        const text = input.value;
        let newValue = "";
        for (i = 0; i < text.length; i++) {
            newValue += text[i];
            newValue += emojis[Math.floor(Math.random()*emojis.length)];
        }

        result.innerText = newValue;
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
            result.innerText = e.target.value;
      }
    });
    
    copyBtn.addEventListener("click", async () => {
      const copiedText = result.innerText;
    
      if (!copiedText) return;
    
      try {
        await navigator.clipboard.writeText(copiedText);
        copyBtn.innerText = "Copied!";
        setTimeout(() => copyBtn.innerText = "Copy", 1000);
      } catch (err) {
        console.error(err);
      }
    });
  });
