import style from './index.module.scss';

export default function Header() {
    return (
        <a className={style.mainLink} href="/">
            <div className={style.navi}>MetaphorViz</div>
        </a>
    );
}
