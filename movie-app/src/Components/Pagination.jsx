import React from 'react'

export default function Pagination({current, onChange, total}) {
    const prev = <button disabled={current === 1} onClick={()=> onChange(current - 1)} >Prev</button>
    const next = <button disabled={current === total} onClick={()=> onChange(current + 1)} >Prev</button>
    const page = new Array(total).fill(0).map((ele, i) => <button onClick={()=> onChange(i+1)} >{i+1}</button>)

  return (
    <div>{prev} {page} {next}</div>
  )
}
