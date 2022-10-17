import React from 'react'


export default function Pagination({current, onChange, total}) {
    const prev = <button disabled={current === 1} onClick={()=> onChange(current - 1)} >Prev</button>
    const next = <button disabled={current === total} onClick={()=> onChange(current + 1)} >Next</button>
    const page = new Array(total).fill(0).map((ele, i) => <button onClick={()=> onChange(i+1)} className={current==i+1 ? 'Action' : ''}  >{i+1}</button>)

  return (
    <div className='paginationContainer' >{prev} {page} {next}</div>
  )
}
