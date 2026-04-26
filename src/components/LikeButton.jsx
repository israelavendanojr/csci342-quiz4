import React, { useState } from 'react'

function LikeButton () {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setLike(!like);
        setCount(like ? count - 1 : count + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>{like ? 'like' : 'unlike'}Like</button>
        </div>
    )


}

export default LikeButton
