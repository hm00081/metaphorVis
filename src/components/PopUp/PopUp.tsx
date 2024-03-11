import style from './index.module.scss';

export const PopUp = (onclick: () => void) => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.videoWrap}>
                    <iframe
                        className={style.video}
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/XLNXB8RLWTI?autoplay=1&mute=1"
                        title="tutorial video for metaphoVis "
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{ border: 'none' }}
                    ></iframe>
                    <div className={style.closeBtn} onClick={onclick}>
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={style.bg}></div>
        </div>
    );
};
