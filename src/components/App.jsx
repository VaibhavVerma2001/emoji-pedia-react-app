import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.

//var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

function createEntry(emojiTerm) {
  return (
    <Entry
      // there must unique key in all terms
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}


// no need to write like this
{/* <Card
      emoji={emojipedia[0].emoji}
      name={emojipedia[0].name}
      description={emojipedia[0].meaning}
      />
      <Card
      emoji={emojipedia[1].emoji}
      name={emojipedia[1].name}
      description={emojipedia[1].meaning}
      />
      <Card
      emoji={emojipedia[2].emoji}
      name={emojipedia[2].name}
      description={emojipedia[2].meaning}
 /> */}


 
//Write like this using map

// function createCard(contact) {
//   return (
//     <Card
//       key={contact.id}
//       name={contact.name}
//       img={contact.imgURL}
//       tel={contact.phone}
//       email={contact.email}
//     />
//   );
// }

//  { emojipedia.map(createCard) }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>


  );
}

export default App;
