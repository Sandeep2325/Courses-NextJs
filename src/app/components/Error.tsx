import React from 'react'

function Error() {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Something went wrong!</strong>
    <div className="mt-2">
      <p className="text-sm">{"Something went wrong, please visit after after taking some tea"}</p>
      {/* Optionally display componentStack */}
      {/* {componentStack && <p className="text-xs mt-2">{componentStack}</p>} */}
    </div>
  </div>
  )
}

export default Error