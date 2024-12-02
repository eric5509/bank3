import React from 'react'

export default function Loader() {
    return (
        <div className="activeBg backdrop-blur-lg h-[calc(100vh-80px)] grid relative place-content-center">
            <span className="loader"></span>
        </div>
    )
}
