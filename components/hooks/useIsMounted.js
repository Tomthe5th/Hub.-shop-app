import React, { useEffect, useState } from "react";

function UseIsMounted() {
  const [isMounted, setIsMounted] = useState();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
}

export default UseIsMounted;
