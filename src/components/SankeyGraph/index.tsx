import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';

import style from './index.module.scss';

export function SankeyGraph() {
    return (
        <div className={style.sankey}>
            <div className={style.btnWrapper}>
                <div className={style.btn}>
                    <div className={style.btnTitle}>Target Theme</div>
                    <ButtonGroup className={style.btnGroup} size="large" color="secondary" variant="outlined">
                        <Button className={style.btnProp}>Politician's Speech</Button>
                        <Button className={style.btnProp}>Opinion to Politicians</Button>
                        <Button className={style.btnProp}>Product Appraisal</Button>
                        <Button className={style.btnProp}>Service Appraisal</Button>
                        <Button className={style.btnProp}>Opinion on a Specific Event</Button>
                        <Button className={style.btnProp}>Diffusion of Sentiment</Button>
                    </ButtonGroup>
                </div>

                <div className={style.btn}>
                    <div className={style.btnTitle}>Target Theme</div>
                    <ButtonGroup className={style.btnGroup} size="large" color="secondary" variant="outlined">
                        <Button className={style.btnProp}>Map</Button>
                        <Button className={style.btnProp}>River</Button>
                        <Button className={style.btnProp}>Plant</Button>
                        <Button className={style.btnProp}>Bubble</Button>
                        <Button className={style.btnProp}>Wheel</Button>
                        <Button className={style.btnProp}>Building & Structure</Button>
                        <Button className={style.btnProp}>Geometry</Button>
                        <Button className={style.btnProp}>Machine</Button>
                        <Button className={style.btnProp}>Decorative</Button>
                        <Button className={style.btnProp}>Show Empty</Button>
                        <Button className={style.btnProp}>Show Full</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}
