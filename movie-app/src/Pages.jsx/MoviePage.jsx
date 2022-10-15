import React from 'react'
import { getData } from '../Components/Fetch'
import MovieCard from '../Components/MovieCard'
import Pagination from '../Components/Pagination'
import './MoviePage.css'

export default function MoviePage() {
    const [arr, setArr] = React.useState([])
    const [sort, setSort] = React.useState('')
    const [order, setOrder] = React.useState('')
    const [page, setPage] = React.useState(1)

    React.useEffect(() => {
        FetchData()
    }, [sort, order, page])

    const FetchData = () => {
        getData(`https://radiant-inlet-76290.herokuapp.com/movies/?_sort=${sort}&_order=${order}&_page=${page}&_limit=15`)
            .then((res) => setArr(res))
    }

    return (
        <div>
            <select onClick={(e) => setOrder(e.target.value)} >
                <option value="">Order</option>
                <option value="asc">Ascending</option>
                <option value="desc">Desendinf</option>
            </select>

            <select onClick={(e) => setSort(e.target.value)} >
                <option value="">Filter</option>
                <option value="original_name">Name</option>
                <option value="vote_average">Rating</option>
                <option value="popularity">Popularity</option>
            </select>

            <div className='movieContainer' >
                {
                    arr.map((ele) => <MovieCard key={ele.id} poster_path={ele.poster_path} original_name={ele.original_name} moreDetalis={ele.id} />)
                }
            </div>
            <Pagination current={page} onChange={(value) => setPage(value)} total={10} />
        </div>
    )
}
