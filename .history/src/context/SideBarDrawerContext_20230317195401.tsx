import { createContext } from 'react'

interface SideBarDrawerProviderProps{
  children: ReactNo
}

const SideBarDrawerContext = createContext({})

export function SideBarDrawerProvider(){
  return (
    <SideBarDrawerContext.Provider value={{}}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}