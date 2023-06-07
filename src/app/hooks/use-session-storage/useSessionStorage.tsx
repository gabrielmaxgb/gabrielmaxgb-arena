// @ts-nocheck
import { useEffect, useState } from "react";

const useSessionStorage = (key: string) => {
  const [sessionStorageData, setSessionStorageData] = useState(
    sessionStorage.getItem(key)
  );

  useEffect(() => {
    const data = sessionStorage.getItem(key);
    setSessionStorageData(data);
  }, []);

  const updateSessionStorageData = (newData) => {
    const updatedSessionStorageData = [...sessionStorageData, newData];
    sessionStorage.setItem(key, updatedSessionStorageData);
    setSessionStorageData(updatedSessionStorageData);
  };

  return {
    data: JSON.parse(sessionStorageData),
    updateSessionStorageData,
  };
};

export default useSessionStorage;
