import { useEffect } from 'react';
import SongItem from './SongItem';
import style from './SongList.module.css'
const SongList = () => {

    useEffect(() => {

    },)
  return (
    <div className={style.wrapper}>
      <SongItem artist='Макс Корж' imageSrc='/songPicture.jpg' song='Малый повзрослел' songSrc='/Korj.mp3'/>
      <SongItem artist='123' imageSrc='face.jpg' song='SONG TITLE' songSrc='/Hamali.mp3'/>
    </div>
  );
}

export default SongList;
