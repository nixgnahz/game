import React from 'react'

import './index.scss'

class LoadMore extends React.Component {
    render () {
        return (
            <div className="bottom">
                <p className="title">
                    <span className="line"></span>
                    松开加载更多
                    <span className="line"></span>
                </p>
            </div>
        )
    }
}

export default LoadMore