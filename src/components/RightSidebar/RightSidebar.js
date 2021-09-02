import React from "react";
import RightSidebarRow from "./SideContent/RightSidebarRow";
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined
} from '@material-ui/icons'

const RightSidebar = () => {
    return(
            <div className="flex-1 pt-6 pr-2">
            
            <RightSidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
            <RightSidebarRow Icon={EmojiFlags} title='Pages' />
            <RightSidebarRow Icon={People} title='Friends' />
            <RightSidebarRow Icon={Chat} title='Messenger' />
            <RightSidebarRow Icon={Storefront} title='Marketplace' />
            <RightSidebarRow Icon={VideoLibrary} title='Videos' />
            <RightSidebarRow Icon={ExpandMoreOutlined} title='Expand More' />
            </div>
    )
}
export default RightSidebar;