import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <div className="site-loader">
                    <div className="site-loader__content">
                        <svg className="site-loader__logo" xmlns="http://www.w3.org/2000/svg" width="353.98" height="353.98" viewBox="0 0 353.98 353.98">
                            <g>
                                <circle fill="#fff" className="a" cx="176.99" cy="176.99" r="176.99"/>
                                <path fill="#141414" fillRule='evenodd' clipRule='evenodd'  className="s" d="M104.16,162.24a22.57,22.57,0,0,1-9.75-7.4A20.3,20.3,0,0,1,90.56,143h18.2a8.87,8.87,0,0,0,2.7,6,8.69,8.69,0,0,0,6,2,9.34,9.34,0,0,0,6-1.75,5.84,5.84,0,0,0,2.2-4.85,5.73,5.73,0,0,0-1.75-4.3,14,14,0,0,0-4.3-2.8,68.62,68.62,0,0,0-7.25-2.5,79.26,79.26,0,0,1-11.1-4.2,20.63,20.63,0,0,1-7.4-6.2q-3.09-4.09-3.1-10.7,0-9.8,7.1-15.35t18.5-5.55q11.61,0,18.7,5.55t7.6,15.45h-18.5a7.19,7.19,0,0,0-2.5-5.35,8.8,8.8,0,0,0-5.9-1.95,7.37,7.37,0,0,0-5,1.65,6,6,0,0,0-1.9,4.75,5.89,5.89,0,0,0,3.2,5.3,52.74,52.74,0,0,0,10,4.1,91.25,91.25,0,0,1,11.05,4.4,20.88,20.88,0,0,1,7.35,6.1,16.32,16.32,0,0,1,3.1,10.3,20.16,20.16,0,0,1-3.05,10.9,21.27,21.27,0,0,1-8.85,7.8,30.31,30.31,0,0,1-13.7,2.9A36.07,36.07,0,0,1,104.16,162.24Z"/>
                                <path fill="#141414" fillRule='evenodd' clipRule='evenodd' className="f" d="M262.81,175.53v13.7h-28.6V204h21.4v13.3h-21.4v28.4h-17.1v-70.2Z"/>
                                <line stroke="#141414" strokeWidth="6" fill="#141414" className="line" x1="101.2" y1="246.05" x2="265.22" y2="82.03"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}