import style from './index.module.scss';

export default function Header(onclick: () => void) {
    return (
        <div className={style.wrapper}>
            <a className={style.mainLink} href="/metaphorVis">
                MetaphorVis
            </a>
            <div className={style.iconWrapper} style={{ marginRight: '-35px' }}>
                <div className={style.tutorialBtn} onClick={onclick}>
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 400.548 400.548"
                        xmlSpace="preserve"
                        fill="white"
                    >
                        <path
                            d="M383.86,99.79c-10.104-4.184-21.731-1.873-29.466,5.86l-51.507,51.512v-31.397c0-22.359-18.13-40.491-40.493-40.491H40.493
	C18.131,85.274,0,103.406,0,125.765v149.018c0,22.359,18.131,40.491,40.493,40.491h221.901c22.363,0,40.493-18.132,40.493-40.491
	v-31.398l51.507,51.512c5.177,5.174,12.088,7.924,19.126,7.924c3.481,0,6.995-0.678,10.34-2.063
	c10.099-4.185,16.688-14.042,16.688-24.978V124.767C400.548,113.831,393.959,103.974,383.86,99.79z M190.309,210.764l-55.191,42.403
	c-2.354,1.812-5.2,2.738-8.06,2.738c-1.991,0-3.99-0.448-5.846-1.363c-4.519-2.226-7.38-6.825-7.38-11.865v-84.807
	c0-5.041,2.861-9.639,7.38-11.864c4.521-2.228,9.911-1.696,13.905,1.375l55.191,42.402c3.26,2.504,5.17,6.381,5.17,10.49
	C195.479,204.383,193.569,208.26,190.309,210.764z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
