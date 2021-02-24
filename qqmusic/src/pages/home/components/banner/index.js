import React, { Component } from 'react'
import { Carousel } from 'antd'
import './style.css'
class Banner extends Component {
    render() {
        const { banners } = this.props
        return (
            <Carousel className="banner"
                autoplay effect="fade">
                {
                    banners.map(item => (
                        <div key={item.bannerId}>
                            <img src={item.pic} alt="banner"></img>
                        </div>
                    ))
                }
            </Carousel>
        )
    }


}

export default Banner

