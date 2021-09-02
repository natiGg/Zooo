import React from "react";
import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline, AccountCircle, NearMe, ExpandMoreOutlined } from '@material-ui/icons';


const Post = () => {
    return(
    <div className="w-full mt-4 bg-white rounded-t rounded-2xl shadow-md ">
        <div className="flex relative items-center p-4">
                 <Avatar  className="mr-2" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      
        <div className="">
            <h3 className="text-base md:text-lg">Natig</h3>
            <p className="text-sm text-gray-600" >September 02,2021</p>
        </div>
        </div>

        <div className="mt-2 mb-2 pt-4 pr-6">
            The best day ever having fun
        </div>
        <div className="w-full">
        <img src="https://previews.123rf.com/images/bialasiewicz/bialasiewicz1704/bialasiewicz170400104/75270960-happy-kids-having-fun-in-a-room-full-of-confetti.jpg" alt=""/>
        </div>
        <div className="pt-2 flex text-gray-600  border-t cursor-pointer p-4 justify-evenly text-md">
                <div className="flex items-center justify-center p-1 hover:bg-gray-200 rounded-2xl">
                    <ThumbUp />
                    <p className="ml-2">Like</p>
                </div>

                <div className="flex items-center justify-center p-1 hover:bg-gray-200 rounded-2xl">
                    <ChatBubbleOutline />
                    <p className="ml-2">Comment</p>
                </div>

                <div className="flex items-center justify-center p-1 hover:bg-gray-200 rounded-2xl">
                    <NearMe />
                    <p className="ml-2">Share</p>
                </div>
        </div>

    </div>
    )
}


export default Post;