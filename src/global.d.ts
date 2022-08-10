// module.scss 적용시 생기는 문제 해결을 위한 추가적인 모듈형식 선언
declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}
