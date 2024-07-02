import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const WatchlistInfo = createContext(null);
const WatchlistProvider = ({ children }: any) => {
  const [watchlist, setWatchlist] = useState<any>([]);

  return (
    <WatchlistInfo.Provider value={{watchlist, setWatchlist}}>
      {children}
    </WatchlistInfo.Provider>
  );
};
export default WatchlistProvider;
