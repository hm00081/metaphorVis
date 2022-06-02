import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { motion, useAnimation, useViewportScroll } from 'framer-motion';

const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // position: fixed;
    //width: 100%;
    height: 8px;
    // top: 10px;
    background-color: #9c27b0;
    font-size: 14px;
    padding: 20px 60px;
    color: white;
`;

const Col = styled.div`
    display: flex;
    align-items: center;
`;

// const Logo = styled(motion.svg)`
//     margin-right: 50px;
//     width: 95px;
//     height: 25px;
//     fill: #e51013;
//     path {
//         stroke-width: 6px;
//         stroke: white;
//     }
// `;

const HomeName = styled.span`
    font-size: 30px;
    margin-left: -50px;
    margin-top: -5px;
    font-weight: bolder;
`;

const Items = styled.ul`
    display: flex;
    align-items: center;
    margin-left: 80px;
`;

const navVariants = {
    top: {
        backgroundColor: '#9c27b0',
    },
    scroll: {
        backgroundColor: '#9c27b0',
    },
};

function Header() {
    const [searchOpen, setSearchOpen] = useState<boolean>(false);

    const inputAnimation = useAnimation();
    const navAnimation = useAnimation();
    const { scrollY } = useViewportScroll();
    const toggleSearch = () => {
        if (searchOpen) {
            inputAnimation.start({
                scaleX: 0,
            });
        } else {
            inputAnimation.start({ scaleX: 1 });
        }
        setSearchOpen((prev) => !prev);
    };
    useEffect(() => {
        scrollY.onChange(() => {
            if (scrollY.get() > 80) {
                navAnimation.start('scroll');
            } else {
                navAnimation.start('top');
            }
        });
    }, [scrollY, navAnimation]); // 다시 클릭 시 닫기.

    return (
        <Nav variants={navVariants} animate={navAnimation} initial={'top'}>
            <Col>
                <HomeName>MetaphorViz</HomeName>
            </Col>
        </Nav>
    );
}

export default Header;
