import React from "react";
import SidebarRow from "./SideContent/SidebarRow";
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined
} from '@material-ui/icons'

const Sidebar = () => {
    return(
            <div className="flex-1 pt-6 pr-2">
            
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlags} title='Pages' />
            <SidebarRow Icon={People} title='Friends' />
            <SidebarRow Icon={Chat} title='Messenger' />
            <SidebarRow Icon={Storefront} title='Marketplace' />
            <SidebarRow Icon={VideoLibrary} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='Expand More' />
            </div>
    )
}
export default Sidebar;