
const playlists = {
  happy: ["Happy Vibes Mix", "Sunny Day Tunes", "Feel Good Hits"],
  chill: ["Lo-Fi Chill Beats", "Relax & Unwind", "Evening Acoustic"],
  focused: ["Deep Focus Instrumentals", "Coding Flow", "Study Session"],
  energetic: ["Workout Pump", "Dance Party", "High Energy Hits"]
};

function showPlaylist(mood) {
  const output = document.getElementById('playlist-output');
  const list = playlists[mood];
  output.innerHTML = `<h2>${mood.toUpperCase()} Playlist</h2><ul>` +
    list.map(track => `<li>${track}</li>`).join('') +
    `</ul>`;
}