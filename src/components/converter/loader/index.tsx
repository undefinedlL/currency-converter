import { FC } from "react";

const Loader: FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width={64}
            height={64}
        >
            <rect
                fill="#101916"
                stroke="#101916"
                strokeWidth="15"
                width="30"
                height="30"
                x="25"
                y="85"
            >
                <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.4"
                ></animate>
            </rect>
            <rect
                fill="#101916"
                stroke="#101916"
                strokeWidth="15"
                width="30"
                height="30"
                x="85"
                y="85"
            >
                <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.2"
                ></animate>
            </rect>
            <rect
                fill="#101916"
                stroke="#101916"
                strokeWidth="15"
                width="30"
                height="30"
                x="145"
                y="85"
            >
                <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="0"
                ></animate>
            </rect>
        </svg>
    );
};

export default Loader;
