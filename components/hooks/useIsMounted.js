import React, { useEffect, useState } from "react";

function useIsMounted() {
  const [isMounted, setIsMounted] = useState();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
}

export default useIsMounted;
