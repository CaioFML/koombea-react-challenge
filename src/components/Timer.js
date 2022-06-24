import React, { useState, useEffect } from 'react'

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval = null

    if (props.active) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000)
    }

    return () => clearInterval(interval);
  }, [props.active, seconds])

  return <p>Completed {seconds}s ago</p>
}

export default Timer