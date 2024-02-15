import style from './SongItem.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setAudio, setPause } from '../../../store/reducers/audioReducer';


interface SongItemProps {
  song: string;
  artist: string;
  imageSrc: string;
  songSrc: string;
}

const SongItem: FC<SongItemProps> = ({artist, imageSrc, song, songSrc}) => {
    const state = useSelector((state: RootState) => state.audio)
    const dispatch = useDispatch()
    const [audio] = useState(new Audio(songSrc))
    const [duration, setDuration] = useState('0:00')

    const play = () => {    
      if(songSrc !== state.audio) {
        if(!state.audio) {
          togglePause()
        }
        changeAudio()
      } else {
        togglePause()
      }
      
    }

    const togglePause = () => {
      dispatch(setPause(!state.pause))
    }

    const changeAudio = () => {
      dispatch(setAudio(songSrc))
    }

    useEffect(() => {
      setDuration(`${Math.floor(audio.duration/60)}:${Math.floor(audio.duration%60)}`)
    },)

  return (
    <div className={style.wrapper}>
      <div className={style.mainBlock}>
      {
            state.audio !== songSrc || state.pause
            ?
            <PlayArrowIcon
            sx={{
                width: 'max(30px, 3vw)',
                height: 'max(30px, 3vw)',
                cursor: 'pointer',
            }}
            onClick={play}
            /> 
            :
            <PauseIcon
            sx={{
                width: 'max(30px, 3vw)',
                height: 'max(30px, 3vw)',
                cursor: 'pointer',
            }}
            onClick={play}
            />   
        }
      <img src={imageSrc} alt="" className={style.picture}/>
      <div style={{marginRight: '5px'}}>
        <div style={{fontWeight: 'bolder'}}>{song}</div>
        <div>{artist}</div>
      </div>
      </div>
      <div>{duration}</div>
    </div>
  );
}

export default SongItem;
