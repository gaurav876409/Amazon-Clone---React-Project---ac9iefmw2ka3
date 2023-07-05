import React from 'react'
import './LeftSide.css';

const LeftSide = () => {
    return (
        <div className="LeftSize_main">
            <div className="leftSide_header">
                Brand
            </div>
            <div className="leftSide_brandname">
                <label className="brandname">
                    <input type="checkbox" value="Apple" />Apple
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Samsung" />Samsung
                </label>
                <label className="brandname">
                    <input type="checkbox" value="MI" />Mi
                </label>
            </div>
        </div>
    )
}

export default LeftSide;