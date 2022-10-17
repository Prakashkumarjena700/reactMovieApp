import React from 'react'

export const Them=React.createContext()

export default function ThemProvider({children}) {
    const[them, setThem]=React.useState('light')

    const themChanger=()=>{
        setThem(them=='light' ? 'dark' : 'light')
    }

  return (
    <Them.Provider value={{them, themChanger}} >
        {children}
        </Them.Provider>
  )
}
