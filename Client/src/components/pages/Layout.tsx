import BusyIndicator from 'react-busy-indicator'
import React from 'react'
import { Link, NotFoundBoundary, useLoadingRoute } from 'react-navi'
import NotFound from "../pages/NotFound";

interface BusyIndicatorProps extends React.HTMLAttributes<any> {
  color?: string
  delayMs?: number
  isBusy?: boolean
}


export default function Layout({ children }) {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  let loadingRoute:any = useLoadingRoute()

  return (
    <div className="Layout">
      {/* This component shows a loading indicator after a delay */}
      <BusyIndicator isBusy={!!loadingRoute} delayMs={200} style={{"color":"red"}} className="" color="" active=""/>
      {/* <header className="Layout-header">
        <h1 className="Layout-title">
        GLOBAL HEADER SET HERE
        </h1>
      </header> */}
      <main>
        <NotFoundBoundary render={renderNotFound}>
          {children}
        </NotFoundBoundary>
      </main>
    </div>
  )
}

// function renderNotFound() {
//   return (
//     <div className='Layout-error'>
//       <NotFound/>
//     </div>
//   )
// }

const renderNotFound = () => {
  return (
    <div className='Layout-error'>
      <NotFound/>
    </div>
  )
}