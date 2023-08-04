"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"
import store from "../store"
import {Provider} from "react-redux"
import   { SWRConfig } from 'swr'


const Providere = ({children,session}) => {
  return (
    <SWRConfig 
    value={{
      refreshInterval: 3000,
      fetcher: (resource, init) => fetch(resource).then(res => res.json())
    }}
  >
    <Provider store={store}>
    <SessionProvider session={session}>
   {children}
  </SessionProvider>
  </Provider>
  </SWRConfig>
  )
}
export default Providere