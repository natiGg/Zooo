import React from "react";

const Profile = () => {
    return (
        <div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div className="flex justify-center bg-white">
  <div className="w-full md:w-2/3 lg:w-1/3 border-l border-r">
    <div className="flex p-4 items-center">
      <div>
        <i className="fas fa-arrow-left text-blue-400 text-lg"></i>
      </div>
      
      <div className="ml-8">
        <p className="font-bold">Josh W</p>
        <p>6,676 Tweets</p>
      </div>
    </div>
    
    <div>
      <img src="https://pbs.twimg.com/profile_banners/607109926/1622322022/1500x500" />
    </div>
    
    <div className="flex justify-between">
      <div className="rounded-full border-4 border-white inline-block -mt-16 w-32 ml-3">
        <img className="w-32 rounded-full" src="https://pbs.twimg.com/profile_images/1367267802940375042/H4JDd6aC_400x400.jpg" />
      </div>
      
      <div>
        <button className="rounded-full px-3 py-2 mt-3 mr-3 transition hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">Edit Profile</button>
      </div>
    </div>
    
    <div className="ml-3">
      <p className="font-bold text-lg">Josh W</p>
      <p className="text-gray-500">@welfordian</p>
    </div>
    
    <div className="px-3 mt-3">
      <p>
        DHIS2. Debian. React. Vue. Gatsby. PWAs. ES6. Node. Electron. Tailwind. Working with a UK charity to bring EMRs to the Developing World.
      </p>
    </div>
    
    <div className="px-3 flex mt-3">
      <div className="flex items-center">
        <i className="fas fa-map-marker-alt"></i>
        <p className="ml-2">Frederick, MD</p>
      </div>
      
      <div className="flex items-center ml-3">
        <i className="fas fa-link"></i>
        <p className="ml-2">
          <a className="text-blue-500 hover:underline" target="_blank" rel="noopener" href="https://welford.me">welford.me</a>
        </p>
      </div>
      
      <div className="flex items-center ml-3">
        <i className="fas fa-calendar-alt"></i>
        <p className="ml-2">Joined June 2012</p>
      </div>
    </div>
    
    <div className="px-3 mt-3 flex">
      <p className="cursor-pointer hover:underline"><span className="font-bold">679</span> Following</p>
      <p className="ml-5 cursor-pointer hover:underline"><span className="font-bold">679</span> Following</p>
    </div>
    
    <div className="flex mt-3 border-b">
      <div className="px-8 hover:bg-blue-50 justify-center border-b-4 border-blue-400 text-blue-400 py-5 cursor-pointer transition">
        <p className="text-center font-bold">Tweets</p>
      </div>
      
      <div className="flex-1 px-8 py-5 hover:bg-blue-50 justify-center text-gray-500 hover:text-blue-400 cursor-pointer transition">
        <p className="text-center font-bold">Tweets & replies</p>
      </div>
      
      <div className="px-8 py-5 hover:bg-blue-50 justify-center text-gray-500 hover:text-blue-400 cursor-pointer transition">
        <p className="text-center font-bold">Media</p>
      </div>
      
      <div className="px-8 py-5 hover:bg-blue-50 justify-center text-gray-500 hover:text-blue-400 cursor-pointer transition">
        <p className="text-center font-bold">Likes</p>
      </div>
    </div>
    
    <div className="p-3">
      <div>
        <p className="text-sm font-bold ml-8 text-gray-500">
          <i className="fas fa-thumbtack"></i>
          
          <span className="ml-3">Pinned Tweet</span>
        </p>
        
        <div className="mt-2">
          <div className="flex">
            <div>
              <img className="w-16 rounded-full" src="https://pbs.twimg.com/profile_images/1367267802940375042/H4JDd6aC_400x400.jpg" />
            </div>

            <div className="ml-4">
              <p>
                <span className="font-bold">Josh W</span> <span className="text-gray-500">@welfordian · Jul 21</span>
              </p>

              <p>
                Launched my new website a few weeks ago Rocket. Any feedback? Too boring? Too basic? Not sure what else to add to it! 
              </p>
            </div>
          </div>
          
          <div className="flex flex-1 rounded-lg border ml-14 mt-3 cursor-pointer">
            <div className="flex justify-center items-center py-8 px-12 bg-gray-100 border-r">
              <i className="fas fa-newspaper text-3xl text-gray-500"></i>
            </div>
            
            <div className="flex-1 flex flex-col justify-center py-8 pr-16 pl-4">
              <p>Joshua Welford</p>
              <p className="text-gray-500">Joshua Welford</p>
              <p className="text-gray-500"><i className="fas fa-link"></i> welford.me</p>
            </div>
          </div>
          
          <div className="flex justify-around mt-4 pl-3">
            <div className="text-gray-500 hover:text-blue-400 transition">
              <i className="fas fa-comment"></i> 3
            </div>
            
            <div className="text-gray-500 hover:text-blue-400 transition">
              <i className="fas fa-retweet"></i>
            </div>
            
            <div className="text-gray-500 hover:text-blue-400 transition">
              <i className="fas fa-heart"></i> 1
            </div>
            
            <div className="text-gray-500 hover:text-blue-400 transition">
              <i className="fas fa-share"></i>
            </div>
            
            <div className="text-gray-500 hover:text-blue-400 transition">
              <i className="fas fa-chart-bar"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

    )
}

export default Profile;