// Demo playlists with sample tracks
const playlists = {
  happy: [
    { name: "Happy Vibes Mix", sample: "Pharrell - Happy" },
    { name: "Sunny Day Tunes", sample: "Katrina & The Waves - Walking on Sunshine" },
    { name: "Feel Good Hits", sample: "Justin Timberlake - Can't Stop the Feeling" }
  ],
  chill: [
    { name: "Lo-Fi Chill Beats", sample: "Chillhop Essentials" },
    { name: "Relax & Unwind", sample: "Norah Jones - Come Away With Me" },
    { name: "Evening Acoustic", sample: "Jack Johnson - Better Together" }
  ],
  focused: [
    { name: "Deep Focus Instrumentals", sample: "Hans Zimmer - Time" },
    { name: "Coding Flow", sample: "Tycho - Awake" },
    { name: "Study Session", sample: "Explosions in the Sky - Your Hand in Mine" }
  ],
  energetic: [
    { name: "Workout Pump", sample: "Eye of the Tiger - Survivor" },
    { name: "Dance Party", sample: "Dua Lipa - Don’t Start Now" },
    { name: "High Energy Hits", sample: "David Guetta - Titanium" }
  ]
};

// Mood-based background colors
const themes = {
  happy: "#fff9c4",     // light yellow
  chill: "#c8e6c9",     // light green
  focused: "#bbdefb",   // light blue
  energetic: "#ffcdd2"  // light red/pink
};

function showPlaylist(mood) {
  setMoodTheme(mood);
  const output = document.getElementById('playlist-output');
  const list = playlists[mood];
  output.innerHTML = `<h2>${mood.toUpperCase()} Playlist</h2><ul>` +
    list.map(track => `<li>${track.name} — <em>${track.sample}</em></li>`).join('') +
    `</ul>`;
}

function setMoodTheme(mood) {
  document.body.style.backgroundColor = themes[mood];
}