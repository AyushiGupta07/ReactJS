import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnLineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnLineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnLineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
