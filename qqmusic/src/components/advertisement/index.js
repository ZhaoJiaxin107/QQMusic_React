import React, { Component, Fragment } from 'react'
import './style.css'
import logo from '../../assets/image/logo.jpg'
import { Button } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
class Advertisement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
        // 绑定this
        this.closeAdvertise = this.closeAdvertise.bind(this)
    }

    closeAdvertise(){
        this.setState({
            isShow:false
        })
    }
    render() {
        const { isShow } = this.state
        return (
            <Fragment>
                {isShow ? (
                    <Fragment>
                        <div className="ad-content">
                            <div>
                                <img src={logo} alt="logo" className="logo"></img>&nbsp;&nbsp;
                       <span>QQ Music</span>
                            </div>
                            <Button danger shape="round" size="small">
                                下载APP
                    </Button>
                            <CloseCircleOutlined className="close" style={{ fontSize: '.2rem' }} onClick={this.closeAdvertise}/>
                        </div>
                        <div className="ad-occupy"></div>
                    </Fragment>
                ) : ''}
            </Fragment >
        )
    }
}

export default Advertisement
