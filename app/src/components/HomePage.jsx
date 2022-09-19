import React, {useState,} from "react";
import AudioPlayer from "./AudioPlayer";

export default function HomePage() {

    return (
        <>
            <h1>Homepage</h1>
            <AudioPlayer id={1} />
        </>
    );
}
