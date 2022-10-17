import React from 'react'
import { getData } from '../Components/Fetch'
import MovieCard from '../Components/MovieCard'
import Pagination from '../Components/Pagination'
import './MoviePage.css'
import {Select} from '@chakra-ui/react'


export default function MoviePage() {
    const [arr, setArr] = React.useState([])
    const [sort, setSort] = React.useState('')
    const [order, setOrder] = React.useState('')
    const [page, setPage] = React.useState(1)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        FetchData()
    }, [sort, order, page])

    const FetchData = () => {
        setLoading(true)
        getData(`https://radiant-inlet-76290.herokuapp.com/movies/?_sort=${sort}&_order=${order}&_page=${page}&_limit=15`)
            .then((res) => {
                setArr(res)
                setLoading(false)
            })
            .catch((err) => setLoading(false))
    }

    return (
        <div>
            <div className='selectBox' >
                <Select width='49%' size='md' onClick={(e) => setOrder(e.target.value)} >
                    <option bg='none' value="">Order</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Select>

                <Select width='49%' className='select' size='md' onClick={(e) => setSort(e.target.value)} >
                    <option value="">Filter</option>
                    <option value="original_name">Name</option>
                    <option value="vote_average">Rating</option>
                    <option value="popularity">Popularity</option>
                </Select>
            </div>
            <div className='loadingIndicator' >
                {loading && <img width='200px' src='https://thumbs.gfycat.com/CorruptOldfashionedGuineapig-max-1mb.gif' />}
            </div>

            <div className='movieContainer' >
                {
                    arr.map((ele) => <MovieCard key={ele.id}
                     poster_path={ele.poster_path} 
                     original_name={ele.original_name} 
                     moreDetalis={ele.id}
                     vote_average={ele.vote_average}
                     popularity={ele.popularity}
                     />)
                }
            </div>
            <Pagination current={page} onChange={(value) => setPage(value)} total={10} />
        </div>
    )
}
