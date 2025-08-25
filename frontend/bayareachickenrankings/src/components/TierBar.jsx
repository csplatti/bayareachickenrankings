import './css/TierBar.css'
import TierLabel from './TierLabel.jsx'
import RestaurantIcon from './RestaurantIcon.jsx';

import { useDroppable } from '@dnd-kit/core'

function TierBar(props) {
    return (
        <div className="tier_bar">
            <TierLabel 
                labelClass={props.labelClass}
                labelName={props.tier}
            />
            <div className={props.areaClass}>
                {props.restaurants.map((restaurant) => {
                    return <RestaurantIcon name={restaurant.name} imagePath={restaurant.imagePath} key={restaurant.name}></RestaurantIcon>
                })}
            </div>
        </div>
    );
}

export default TierBar