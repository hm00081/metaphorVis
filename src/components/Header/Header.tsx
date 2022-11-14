import style from './index.module.scss';

export default function Header() {
    return (
        <a className={style.mainLink} href="/metaphorVis">
            <div className={style.navi}>MetaphorVis</div>
        </a>
    );
}
