import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import TierBar from './TierBar'
import './css/TierList.css'

import chickFilALogo from '../images/chick-fil-a.png'

function TierList() {
  const [restaurants, setRestaurants] = useState([{name: "Chick-fil-a", imagePath: chickFilALogo, tier: "S"}]);
  const tiers = ["S", "A", "B", "C", "D", "F"];

  return (
    <div className="tierlist_container">
            {tiers.map(((tier, index) => {
                return (
                    <TierBar 
                        key={index}
                        labelClass={tier + "-label"}
                        tier={tier}
                        areaClass={tier + "-area"}
                        restaurants={restaurants.filter((restaurant) => restaurant.tier == tier)}
                    />
                );
            }))}
            <div className="RestaurantArea"></div>
    </div>
  );
}

export default TierList
