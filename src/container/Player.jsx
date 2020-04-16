import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import isUrl from '../utils/url';
import '../assets/styles/components/Player.scss';

const Player = ({ playing, history, match, getVideoSource }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getVideoSource(id);
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

const mapStateToProps = state => ({
  playing: state.videos.playing,
});
const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
