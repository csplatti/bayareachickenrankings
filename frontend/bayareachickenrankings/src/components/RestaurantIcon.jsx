import "./css/TierList.css"
import {CSS} from '@dnd-kit/utilities'

import { useDraggable } from '@dnd-kit/core'

function RestaurantIcon(props) {
    return (
        <img src={props.imagePath}  className="image"></img>
    );
}

export default RestaurantIcon;