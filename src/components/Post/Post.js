import React from "react";
import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline, AccountCircle, NearMe, ExpandMoreOutlined } from '@material-ui/icons';


const Post = () => {
    return(
    <div className="w-50 mt-8 rounded-lg bg-gray-50 shadow-md">
        <div className=" relative flex space-x-4 items-center p-12">
                 <Avatar  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      
        <div className="">
            <h3 className="text-base md:text-lg">Natig</h3>
            <p className="text-sm text-gray-800" >September 02,2021</p>
        </div>
        </div>

        <div className="mt-10 mr-10 py-15 px-25">
            The best day ever having fun
        </div>
     
        <div className="flex justify-evenly cursor-pointer text-base gray-100 py-10 border-t-1 border-gray-50 p-15">
                <div className="flex justify-center items-center p-5 flex-1">
                    <ThumbUp />
                    <p>Like</p>
                </div>

                <div className="flex justify-center items-center p-5 flex-1">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>

                <div className="flex justify-center items-center p-5 flex-1">
                    <NearMe />
                    <p>Share</p>
                </div>
        </div>

    </div>
    )
}


export default Post;