import React from 'react';
import '../styles/Browse.css';
import { Link } from 'react-router-dom';

export default function Browse() {
  // Temporary mock data for streams
  const streams = [
    {
      id: 1,
      title: 'Epic Apex Legends Gameplay',
      streamer: 'GamerPro',
      thumbnail: 'https://via.placeholder.com/400x225?text=Stream+1'
    },
    {
      id: 2,
      title: 'Just Chatting with Viewers',
      streamer: 'ChatQueen',
      thumbnail: 'https://via.placeholder.com/400x225?text=Stream+2'
    },
    {
      id: 3,
      title: 'Speedrunning Minecraft Any%',
      streamer: 'BlockMaster',
      thumbnail: 'https://via.placeholder.com/400x225?text=Stream+3'
    },
    {
      id: 4,
      title: 'LoL Ranked Grind',
      streamer: 'Summoner99',
      thumbnail: 'https://via.placeholder.com/400x225?text=Stream+4'
    },
    {
      id: 5,
      title: 'Music & Chill Beats',
      streamer: 'DJStreamz',
      thumbnail: 'https://via.placeholder.com/400x225?text=Stream+5'
    }
  ];

  return (
    <div className="browse-container">
      <h2 className="browse-title">Browse Streams</h2>
      <div className="stream-grid">
        {streams.map((stream) => (
          <Link key={stream.id} to={`/watch/${stream.id}`} className="stream-card">
            <img src={stream.thumbnail} alt={stream.title} className="stream-thumbnail" />
            <div className="stream-info">
              <h3>{stream.title}</h3>
              <p>{stream.streamer}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
