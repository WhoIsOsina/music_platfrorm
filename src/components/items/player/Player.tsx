import { useSelector } from 'react-redux';
import style from './Player.module.css'
import { RootState } from '../../../store/store';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
    const state = useSelector((state: RootState) => state.audio)
    const playerRef = useRef<ReactPlayer | null>(null)
    const url = 
  return (
    <div className={style.wrapper}>
    </div>
  );
}

export default Player;
