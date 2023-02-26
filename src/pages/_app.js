import '@/styles/globals.css'


import dynamic from "next/dynamic";
import React from "react";


function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App;

// export default dynamic(() => Promise.resolve(App), {
//   ssr: false,
// });