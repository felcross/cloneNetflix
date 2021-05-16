import React from 'react'
import './Style.css'

export default ({item})=>{

     let firstDate =new Date(item.first_air_date);
     let genres =[];
     for(let i in item.genres){
         genres.push(item.genres[i].name)
     }

     let description = item.overview;
     if(description.length > 200){
         description = description.substring(0,200)+'...';
     }
    
    return(
        <section  className='featured' style={{
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featuredvertical'>
                <div className='featuredhorizontal'>
                <div className='featuredname'>{item.original_name}</div>
                 <div className='featuredinfo'>
                    <div className='featuredpoints'>{item.vote_average}Pontos</div>
                    <div className='featuredyear'>{firstDate.getFullYear()}</div>
                    <div className='featuredseasons'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's':''}</div>
                </div>
                <div className='featureddescription'>{description}</div>
                <div className='featuredbuttons'>
                  <a href={`/watch/${item.id}`} className='featuredwatchbutton'>Assistir</a>
                  <a href={`/list/add/${item.id}`}className='featuredmylistbutton'>+ Minha Lista</a>
                </div>
                <div className='featuredgenres'><strong>Gênero:</strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}