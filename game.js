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
    text: 'In a distant land far far away, there was a dark and misty forest that no one on their right mind would dare to cross.\n Many venture in, a few are seen again. Lately, even light became a stranger to its path. \n They say a shadow lurks between the wrinkled trees, patiently looking for its next prey.\n\n A little carefree girl was tightly holding onto her little basket. She was struggling to see in front of her because her newly shining red hood was too big for her. "Grandma spent one too many days making this hood", she was thinking with a smile." \n\n The road broke in half with a couple of signs, one leading to the lake, the other to the town. \n What would grandma like? Spring flowers from the lake or some delicious bakery from town?',
    options: [
      {
        text: "Spring flowers",
        setState: { springFlowers: true },
        nextText: 2,
      },
      {
        text: "Delicious bakery",
        nextText: 3,
      },
    ],
  },

  {
    id: 2,
    text: "As the little girl approached the lake, a carpet of yellow iris welcomed her with a sweet and homely scent.\n Marigolds were dashing under the spotlight while water lilies were dancing with the breeze.\n While she was admiring this little paradise, she noticed a small, uneven shape on the ground leading to the forest. ",
    options: [
      {
        text: "Delicious bakery",
        nextText: 3,
      },
      {
        text: "Forest",
        nextText: 4,
      },
    ],
  },

  {
    id: 3,
    text: "The air was filled with mesmerising notes of glazed fruits and honey buttery cakes.\n The bakery, usually crowded with people, was not as cheerful as the little girl remembered.\n People were whispering about the last disappearance, but the girl was too fascinated by the warm apple pies and the rainbow of cupcakes to notice that.\n After filling her basket, she was ready to go.",
    options: [
      {
        text: "Spring flowers",
        nextText: 2,
      },
      {
        text: "Forest",
        nextText: 5,
      },
    ],
  },

  {
    id: 4,
    text: "The forest was so quiet that the little girl could hear her heartbeat. A voiceless wind blew her hood away.\n She could barely see the path to her grandma's place, adorned with small, squashy mushrooms drowning under sticky, rotten leaves.\n The absence of light in the heart of the forest did not stop her grandma from building a small cottage where she could nurture her love for nature.\n\n The little girl quietly opened the door, excited to see her grandma... \n\n As soon as the door opened, a massive man came from her grandma's bedroom.\n He was holding a long rifle, but did not notice the small figure pointing a gun at him.",
    options: [
      {
        text: "Shoot",
        requiredState: (currentState) => currentState.shoot,
        nextText: 6,
      },
      {
        text: "Do not shoot",
        nextText: 7,
      },
    ],
  },

  {
    id: 5,
    text: "The forest was so quiet that the little girl could hear her heartbeat. A voiceless wind blew her hood away.\n She could barely see the path to her grandma's place, adorned with small, squashy mushrooms drowning under sticky, rotten leaves.\n The absence of light in the heart of the forest did not stop her grandma from building a small cottage where she could nurture her love for nature.\n\n The little girl quietly opened the door, excited to see her grandma... \n\n As soon as the door opened, a furry wolf came from her grandma's bedroom.",
    options: [
      {
        text: "Shoot",
        requiredState: (currentState) => currentState.shoot,
        nextText: 8,
      },
      {
        text: "Do not shoot",
        nextText: 9,
      },
    ],
  },

  {
    id: 6,
    text: "BANG! BANG! The little girl dropped her basket and ran to her grandma's bedroom while still holding the gun. Her grandma was tied to the chair.\n After removing a piece of cloth from her mouth, she smiled.\n ",
    nextText: 10,
  },

  {
    id: 7,
    text: "After hesitating for a second, the massive man threw a vase towards the little girl.\n\n The last thing she saw was red and then all went black...",
    nextText: 11,
  },

  {
    id: 8,
    text: 'BANG! BANG! The little girl dropped her basket and ran to her grandma\'s bedroom while still holding the gun.\n "Nooo!" Her grandma cried out loud. She looked behind her.\n\n The front door was open again and a massive man was pointing his rifle to her.',
    nextText: 11,
  },

  {
    id: 9,
    text: 'After hesitating for a second, the furry wolf went back to her grandma\'s bedroom. The little girl ran to find her petting him.\n "The hunter is coming soon" she said with a smile. "Be ready with your gun. Together we can defeat him."',
    nextText: 10,
  },

  {
    id: 10,
    text: "YOU WON!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },

  {
    id: 10,
    text: "YOU LOST!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
];

startGame();
