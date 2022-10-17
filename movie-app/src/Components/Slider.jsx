import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slider.css'

const slideImages = [
    {
        url: 'https://droidjournal.com/wp-content/uploads/2022/08/House-3.webp',
        caption: 'House of the Dragon'
    },
    {
        url: 'https://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg',
        caption: 'Avatar 2'
    },
    {
        url: 'https://www.xtrafondos.com/wallpapers/resoluciones/22/tres-spider-man-fanart_3840x2160_9292.jpg',
        caption: 'Spider-Man: No Way Home'
    },
    {
        url: 'https://wallpapers.com/images/featured/xkk6fx6q0v4ykcr6.jpg',
        caption: 'The Lord of the Rings'
    },
    {
        url: 'https://images.alphacoders.com/179/179211.jpg',
        caption: 'The Twilight Saga'
    },
];

export const Slider = () => {
    return <div>
        <Slide scale={0.1}  >
            {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                    <div className='sloderBox'  >
                        <img src={slideImage.url} alt={slideImage.caption} />
                        <span className='caption' >{slideImage.caption}</span>
                    </div>
                </div>
            ))}
        </Slide>
    </div>
}


const slider2 = ['https://blogger.googleusercontent.com/img/a/AVvXsEjSMkDKvuhxeTkNlzQDKXG99biZ6ORaB7xIa1ylL-A0t_n2TZ1WA5TVn73sg2Aa2hNe-eBRW5KgNRjIfkUBhe5FuD71fsl2cO0CAl0uvBye5zM8l54BzLm9ftLsX1oos4yBUqeCPw10BoDzAB2hx8pkEnFteVvgV-uYsRjLZ1ZnwCY6srZxGsozlz6J=w1600',
    'https://st1.bollywoodlife.com/wp-content/uploads/2022/09/Brahmastra-exciting-6.jpg',
    'https://static.toiimg.com/photo/msid-91437182/91437182.jpg',
    'https://i.etsystatic.com/15375993/r/il/f79b7b/1394903766/il_fullxfull.1394903766_frxe.jpg',
    'https://images.squarespace-cdn.com/content/v1/5935bdc315cf7d45e895fdfe/1557857896793-H0GROSO5OUE9NDE2IZ2I/LOTF---TTT-poster-credit-to-Metropolitan-Festival-Orchestra.jpg?format=1500w',
    'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Fnew-thor-love-and-thunder-poster-0.jpg?w=960&cbr=1&q=90&fit=max',
    'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/she_hulk_review.jpeg',
]

export const Slider2 = () => {
    return <div >
        <Slide slidesToScroll={2} slidesToShow={5} indicators={true} autoplay={false} >
            {
                slider2.map((ele) => <div className='slider2' >
                    <img src={ele} alt="" />
                </div>)
            }
        </Slide>
    </div>
}