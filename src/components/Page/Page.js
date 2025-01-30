import React from 'react';
import './Page.css';

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <div className="page-content">
                {props.children}
            </div>
        </div>
    );
});

export default Page;