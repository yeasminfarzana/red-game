const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

/* Function to start game */
function startGame() {
  state = {};
  showTextNode(1);
}

/*Take particular index*/
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption() {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: 'In a distant land far far away, there was a dark and misty forest that no one on their right mind would dare to cross. Many venture in, a few are seen again. Lately, even light became a stranger to its path. They say a shadow lurks between the wrinkled trees, patiently looking for its next prey. A little carefree girl was tightly holding onto her little basket. She was struggling to see in front of her because her newly shining red hood was too big for her. "Grandma spent one too many days making this hood", she was thinking with a smile." The road broke in half with a couple of signs, one leading to the lake, the other to the town. What would grandma like? Spring flowers from the lake or some delicious bakery from town?',
    options: [
      {
        text: "Spring flowers",
        setState: { springFlowers: true },
        nextText: 2,
      },
      {
        text: "Delicious bakery",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "The forest was so quiet that the little girl could hear her heartbeat. A voiceless wind blew her hood away. She could barely see the path to her grandma's place, adorned with small, squashy mushrooms drowning under sticky, rotten leaves. The absence of light in the heart of the forest did not stop her grandma from building a small cottage where she could nurture her love for nature. The little girl quietly opened the door, excited to see her grandma... As soon as the door opened, a massive man came from her grandma's bedroom. He was holding a long rifle, but did not notice the small figure pointing a gun at him.",
    options: [
      {
        text: "Shoot",
        requiredState: (currentState) => currentState.shoot,
        nextText: 3,
      },
      {
        text: "Do not shoot",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "at",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
];

startGame();
