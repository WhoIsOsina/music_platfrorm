import style from './SongItem.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useState } from 'react';

const SongItem = () => {
    const [pause, setPause] = useState(true)
    const play = () => {
        setPause(!pause)
    }
  return (
    <div className={style.wrapper}>
      <div className={style.picture}></div>
      <div style={{marginLeft: '5px'}}>
        {
            pause 
            ?
            <PlayArrowIcon
            sx={{
                width: 'max(30px, 3vw)',
                height: 'max(30px, 3vw)',
                padding: '5px',
                cursor: 'pointer',
            }}
            onClick={play}
            /> 
            :
            <PauseIcon
            sx={{
                width: 'max(30px, 3vw)',
                height: 'max(30px, 3vw)',
                padding: '5px',
                cursor: 'pointer',
            }}
            onClick={play}
            />   
        }

      </div>
    </div>
  );
}

export default SongItem;
