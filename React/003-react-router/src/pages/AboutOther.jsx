import React, { Component } from 'react'
import { withRouter,useParams } from 'react-router-dom';

export default class AboutOther extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                关于其他
                <AboutDetail />
            </div>
        )
    }
}

const AboutDetail = withRouter(()=>{
    const param = useParams()
    console.log(`AboutDetail`, param);
    return (
        <>
        <h4>AboutDetail</h4>
        <p>{param.message}</p>
        </>
    )
})
