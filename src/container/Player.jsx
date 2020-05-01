import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoSource } from '../actions';
import isUrl from '../utils/url';
import '../assets/styles/components/Player.scss';

const Player = ({ history, match }) => {
  const playing = useSelector(state => state.videos.playing);
  const dispatch = useDispatch();
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getVideoSource(id));
    setLoading(true);
  }, []);

  if (!loading) return <p>Loading...</p>;
  if (!isUrl(playing.source)) return <Redirect to='/404' />;
  return (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;
