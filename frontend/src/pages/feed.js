// src/pages/Feed.js
import React from "react";

const mockRecommendations = [
  { id: 1, title: "Lost in the Fire", artist: "Gesaffelstein & The Weeknd" },
  { id: 2, title: "Daylight", artist: "David Kushner" },
  { id: 3, title: "Save Your Tears", artist: "The Weeknd" },
];

const Feed = () => {
  return (
    <div className="p-4 bg-zinc-950 min-h-screen text-white">
      <h2 className="text-xl font-semibold mb-4">🔥 Top Picks of the Week</h2>
      <div className="grid gap-4">
        {mockRecommendations.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-800 p-4 rounded-2xl shadow hover:bg-zinc-700 transition"
          >
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-zinc-400">{item.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
