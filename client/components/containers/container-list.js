import React, { Component } from 'react'
import ContainerThumbnail from './container-thumbnail'

export default function ContainerList({containerList, handleBuildContainer, handleStartContainer, handleStopContainer}){
    
    let thumbnails = containerList.containers.map((container) => {
            return <ContainerThumbnail 
                key={container.container.id} 
                container={container} 
                handleBuild={handleBuildContainer} 
                handleStart={handleStartContainer} 
                handleStop={handleStopContainer}/>
          })
    
    return  <div className="col-sm-12 col-md-12">
        {thumbnails}
    </div>
}
