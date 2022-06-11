// 1 Zadatak
const p = document.getElementById('paragraf');
const d = document.querySelector('#paragraf').innerText;


function highlight() {
    const splitWords = p.innerText.split(' ');
    const highlightedWords = splitWords.map((word) =>
        word.length > 8 ? `<mark>${word}</mark>` : word
    );
    const joinedWords = highlightedWords.join(' ');

    p.innerHTML = joinedWords;
}
highlight();

// 2 Zadatak

let anchor = document.createElement('a');
let textNode = document.createTextNode("Web stranica fakulteta");
anchor.appendChild(textNode);
anchor.href = "https://www.oss.unist.hr/";
anchor.target = "_blank";
document.body.appendChild(anchor);

//3 Zadatak

function countWords() {
    const words = p.innerText.split(' ');
    return words.length;
}


const h = document.getElementById('glavetina');
function createDiv() {
    let div = document.createElement('div');
    let count = countWords();
    div.textContent = count + ' riječi';
    return div;
}
h.appendChild(createDiv());

// 4 Zadatak
/* const escape = s => s.replace(/[-\/\\!?|[\]{}]/g, '\\$&');

const replaceStringWithEmoji = (string) => {
  const emojiMap = {
    '?': ' 🤔',
    '!': ' 😲',
  };
  const pattern = new RegExp(
    Object.keys(emojiMap).map(escape).join('|'),
    'g'
  );
  return string.replace(pattern, match => emojiMap[match]);
}; */
p.innerText = p.innerText.replaceAll('?', ' 🤔');
p.innerText = p.innerText.replaceAll('!', ' 😲');
/* p.innerText = replaceStringWithEmoji(d); */


highlight();