import { useState } from "react";

export default function Player({ name, symbol ,isActive}) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  
  return (
    <li className={isActive? 'active':undefined}>
      <span className='player' >
        {isEditing ? (
          <input value={playerName} autoFocus
          onChange={(e)=>setPlayerName(e.target.value)}/>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {isEditing ? (
        <button onClick={()=>setIsEditing(false)}>Save</button>
      ) : (
        <button onClick={()=>setIsEditing(true)}>Edit</button>
      )}
    </li>
  );
}
