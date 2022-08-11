import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import {
    CommentIcon,
    FlagIcon,
    LikeIcon,
    PauseIcon,
    PlayIcon,
    ShareIcon,
    SoundIcon,
    SoundMuteIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Home() {
    const [videos, setVideos] = useState([]);
    const videoRef = useRef(null);
    const backgroundSizeRef = useRef('100%');
    const [playPause, setPlayPause] = useState(false);
    const [sound, setSound] = useState([true, 1]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                let url = 'https://62d050fc1cc14f8c08889d06.mockapi.io/tiktok/videos';
                const response = await fetch(url);
                const responseBody = await response.json();
                setVideos(responseBody);
            } catch (err) {
                console.error(err);
            }
        };

        fetchVideos();
    }, []);

    const handlePlay = () => {
        setPlayPause(!playPause);
        videoRef.current.pause();
    };

    const handlePause = () => {
        setPlayPause(!playPause);
        videoRef.current.play();
    };

    let a = [true, 1];

    const handleSound = () => {
        setSound([!sound[0], videoRef.current.volume]);
        if (videoRef.current.volume !== 0) {
            videoRef.current.volume = 0;
            backgroundSizeRef.current = '0';
            setSound([sound[0], 0]);
        } else {
            videoRef.current.volume = sound[1];
            backgroundSizeRef.current = `${videoRef.current.volume * 100}%`;
        }
    };

    const handleInput = (e) => {
        let target = e.target;

        const min = target.min;
        const max = target.max;
        const val = target.value;

        target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
        videoRef.current.volume = (val - min) / (max - min);
    };

    const handleScroll = (e) => {};

    console.log(sound[1]);

    const renderVideos = videos.map((video) => {
        return (
            <div key={video.id} className={cx('video-item')}>
                <Link to={`/@${video.nickname}`} className={cx('avatar')}>
                    <Image src={video.avatar} alt={video.nickname} />
                </Link>
                <div className={cx('body-video')}>
                    <header className={cx('header-video')}>
                        <Link to={`/@${video.nickname}`} className={cx('author-video')}>
                            <h3>{video.nickname}</h3>
                            <h4>{video.full_name}</h4>
                        </Link>

                        <div className={cx('title-video')}>
                            <span>{video.title}</span>
                            {video.name_tag.map((tag, index) => {
                                return (
                                    <Link key={index} to={`/tag`} className={cx('tag-video')}>
                                        <strong>{` ${tag}`}</strong>
                                    </Link>
                                );
                            })}
                        </div>
                        <h4 className={cx('music-video')}>
                            <Link to="/music">{video.music_tag}</Link>
                        </h4>

                        <Button className={cx('btnfollow-video')} outline small>
                            Follow
                        </Button>
                    </header>
                    <div className={cx('video-makeplay')}>
                        <div className={cx('video')}>
                            <video ref={videoRef}>
                                <source src={video.url} alt={video.title} />
                            </video>

                            {playPause ? (
                                <PlayIcon className={cx('playPause-icon')} onClick={handlePlay} />
                            ) : (
                                <PauseIcon className={cx('playPause-icon')} onClick={handlePause} />
                            )}

                            <div className={cx('sound-video')}>
                                <div className={cx('control-sound')}>
                                    <input
                                        id="progress"
                                        className={cx('progress')}
                                        type="range"
                                        defaultValue={`${sound[1] * 100}`}
                                        step="1"
                                        min="0"
                                        max="100"
                                        onInput={handleInput}
                                        style={{ backgroundSize: `${backgroundSizeRef.current} 100%` }}
                                    />
                                </div>

                                {sound[0] ? (
                                    <SoundIcon className={cx('sound-icon')} onClick={handleSound} />
                                ) : (
                                    <SoundMuteIcon className={cx('sound-icon')} onClick={handleSound} />
                                )}
                            </div>

                            <p className={cx('report-video')}>
                                <FlagIcon className={cx('flag-icon')} />
                                Report
                            </p>
                        </div>

                        <div className={cx('interact-video')}>
                            <div className={cx('like-video')}>
                                <LikeIcon />
                                <strong>{video.likes}</strong>
                            </div>

                            <div className={cx('comment-video')}>
                                <CommentIcon />
                                <strong>{video.comments}</strong>
                            </div>

                            <div className={cx('share-video')}>
                                <ShareIcon />
                                <strong>{video.shares}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={cx('wrapper')} onScroll={handleScroll}>
            {renderVideos}
        </div>
    );
}

export default Home;
