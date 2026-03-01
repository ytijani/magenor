import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> { }

const Logo: React.FC<LogoProps> = (props) => {
    return (
        <svg
            width="240"
            height="60"
            viewBox="0 0 240 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <style>
                {`
          .text { font: 900 32px sans-serif; letter-spacing: -0.05em; }
          .mark { fill: currentColor; }
        `}
            </style>

            <g id="logo-mark">
                {/* Geometric Industrial Mark (The 'M') from User SVG */}
                <g transform="translate(10, 8) scale(0.18) translate(-161, -109)">
                    <path
                        d="M 172 119 L 172 267 L 196 267 L 201 262 L 201 172 L 203 169 L 254 217 L 256 217 L 307 169 L 309 172 L 309 262 L 314 267 L 338 267 L 338 119 L 314 119 L 254 170 L 196 119 Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        className="mark"
                    />
                    <path
                        d="M 218 210 L 227 249 L 240 259 L 254 258 L 269 258 L 281 249 L 289 210 L 254 227 Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        className="mark"
                    />
                </g>
            </g>

            {/* MAGENOR Text */}
            <text id="logo-text" x="55" y="38" fill="currentColor" className="text" fontFamily="'Plus Jakarta Sans', sans-serif">MAGENOR</text>
        </svg>
    );
};

export default Logo;
