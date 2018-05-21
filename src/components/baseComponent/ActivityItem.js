import React from 'react'

class ActivityItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: props.value
        }
    }

    render () {
        return(
            <li className="activity-item">
                <img src={this.state.detail.cover}/>
                <div className="row">
                    <div className="column">
                        <p className="detail">{this.state.detail.desc}</p>
                        <p className="time">{this.state.detail.time}</p>
                    </div>
                    <p className={this.state.detail.status ? 'status ing' : 'status over'}>
                        <img src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/3/2/a/4/5a55ca26199a4.png"/>
                        <span>{this.state.detail.status ? '进行中' : '已结束'}</span>
                    </p>
                </div>
            </li>
        )
    }
}

export default ActivityItem