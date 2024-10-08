var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "I've rejected affection", time: 7, extra: 4},
  { text: "For years and years", time: 10, extra: 4 },
  { text: "Now I have it, and damn it", time: 13, extra: 4 },
  { text: "It's kind of weird", time: 16, extra: 4 },
  { text: "He tells me I'm pretty", time: 19, extra: 4 },
  { text: "Don't know how to respond", time: 21, extra: 5 },
  { text: "I tell him that he's pretty too", time: 25, extra: 4 },
  { text: "Can I say that? Don't have a clue", time: 27, extra: 5 },
  { text: "With every passing moment", time: 31, extra: 4 },
  { text: "I surprise myself", time: 34 , extra: 4 },
  { text: "I'm scared of flies", time: 36, extra: 3 },
  { text: "I'm scared of guys", time: 38, extra: 3 },
  { text: "Someone please help", time: 40, extra: 3 },
  { text: "'Cause I think I've fallen", time: 42, extra: 4 },
  { text: "In love this time", time: 45, extra: 4 },
  { text: "I blinked and suddenly, I had a valentine", time: 48, extra: 7  },
  { text: "(Valentine)", time: 53, extra: 5  },
  { text: "What if he's the last one I kiss?", time: 78, extra: 6  },
  { text: "What if he's the only one I'll ever miss?", time: 84, extra: 7  },
  { text: "Maybe I should run, I'm only 21", time: 90, extra: 6  },
  { text: "I don't even know who I want to become", time: 94, extra: 10  },
  { text: "I've lost all control of my heartbeat now", time: 104, extra: 7  },
  { text: "Got caught in a romance with him somehow", time: 110, extra: 7  },
  { text: "I still feel a shock through every bone", time: 116, extra: 7 },
  { text: `When I hear an "I love you"`, time: 122, extra: 3  },
  { text: "'Cause now I've got someone to lose", time: 124, extra: 5  },
  { text: "The first one to ever like me back", time: 128, extra: 6  },
  { text: "I'm seconds away from a heart attack", time: 131, extra: 9 },
  { text: "How the hell did I fall in love this time?", time: 138, extra: 8  },
  { text: "And honestly, I can't believe I get to call you mine", time: 144, extra: 8 },
  { text: "I blinked and suddenly, I had a valentine", time: 150, extra: 9  },
  { text: "(Valentine)", time: 156, extra: 7  },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.extra
  );

  console.log(currentLine, time);

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

setTimeout(ocultarTitulo, 216000);