import React from 'react';

const BubbleChartMobile = ({chartData}) => {

    const items = chartData?.map(({label,value}, index) => {
        return (
            <div className="bubbleChartColumn_item" key={index}>
                <div>
                    <div className="item_circle">
                        {value}%
                    </div>
                </div>
                <div>
                    <span>
                        {label}
                    </span>
                </div>
            </div>
        )
    })

    return (
     <div className="bubbleChartColumn">
         {items}
     </div>
    )
}
 
export default BubbleChartMobile;