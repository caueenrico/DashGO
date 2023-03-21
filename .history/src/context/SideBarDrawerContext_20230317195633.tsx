import { createContext } from 'react'

interface SideBarDrawerProviderProps{
  children: React.ReactNode;
}

const SideBarDrawerContext = createContext({})

export function SideBarDrawerProvider({children}: SideBarDrawerProviderProps){
  const disclo

  return (
    <SideBarDrawerContext.Provider value={{}}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}