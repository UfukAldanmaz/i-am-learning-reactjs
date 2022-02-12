import React from "react";
import Entry from "../components/Entry";
import emojipedia from "../assets/data/emojipedia";

function createEmojis(emojis) {
    return (
        <Entry
            key={emojis.id}
            emoji={emojis.emoji}
            name={emojis.name}
            meaning={emojis.meaning}
        />
    );
}
function App() {
    return (
        <div className="emojis">
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">{emojipedia.map(createEmojis)}</dl>
        </div>
    );
}

export default App;
