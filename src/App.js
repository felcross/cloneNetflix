
import React, {useEffect, useState} from 'react'
import './App.css'
import Tmdb from './Tmdb'
import Movierow from './components/MovieRow/MovieRow'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie'
import Header from './components/Header'
export default ()=>{

    const [movieList,setMovieList] = useState([]);
    const [featuredData,setFeaturedData] = useState(null);
    const [blackHeader,setBlackHeader] = useState(false);

    useEffect(()=>{
     const loadAll = async () =>{
        // pegando lista
        let list = await Tmdb.getHomeList(); 
          setMovieList(list);
          // pegando originais filtrando
          let originals = list.filter(i=>i.slug === 'originals')
          let radomChosen = Math.floor(Math.random()*(originals[0].items.results.length -1))
          let chosen = originals[0].items.results[radomChosen]
          let choseninfo = await Tmdb.getMovieInfo(chosen.id,'tv')
          setFeaturedData(choseninfo)
    }
    loadAll();
    },[]);

    useEffect(()=>{
      const scrollListener = () =>{
          if(window.scrollY > 15){
              setBlackHeader(true)
          }
          else{ setBlackHeader(false)}
      }

      window.addEventListener('scroll',scrollListener);
      return () =>{
          window.removeEventListener('scroll',scrollListener)
      }
    },[])
    return (
           
        <div className='page'>
            <Header black={blackHeader}/>

         {featuredData &&
         <FeaturedMovie item={featuredData}/> }


          <section className='list'>
          {movieList.map((item,key)=>(
              <Movierow key={key} title={item.title} items={item.items}/>
          ))}

          </section>
          <footer>
              <p>Baseado na aula do b7web<br/>
              Feito por <strong>Felipe Batista</strong><br/>
              Unica intenção de ser usado como portfólio<br/>
              Todos os direitos de imagem reservados a <strong>NETFLIX</strong><br/>
              Dados Extraidos de https://www.themoviedb.org/</p>
          </footer>

          {movieList.length <=0 &&
          <div className='loading'>
         <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
            </div>}
        </div>
    );
}