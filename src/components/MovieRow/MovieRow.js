
import React, {useState} from 'react';
import './Style.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';




export default ({title,items})=>{
    const [scrollX,setScrollX] = useState(0);
    const handleleftArrow = () =>{
       
        let x= scrollX + Math.round(window.innerWidth/ 2);
        if(x = 0){
            x =0
        }
        setScrollX(x)
    }
    const handlerightArrow = () =>{
     let x= scrollX + Math.round(window.innerWidth/ 2);
     let listw = items.results.length * 150;
     if(window.innerWidth - listw){
         x =(window.innerWidth - listw)-60
     }
     setScrollX(x)}

    return (
           
        <div className='movieRow'>
               <h2>{title}</h2>
                 <div className='movierow--left' onClick={handleleftArrow}>
                   <NavigateBeforeIcon style={{fontSize:50}}/>
                  </div>
                  <div className='movierow--right' onClick={handlerightArrow}>
                      <NavigateNextIcon style={{fontSize:50}}/>
                  </div>

            <div className='movieRow--listarea'>
               <div className='movieRow--lists' style={{
                   marginLeft: scrollX,
                   width:items.results.length * 150
               }}>
                     {items.results.length > 0 && items.results.map((item,key)=>(
                        <div key={key} className='movieRow--item'>
                         <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                            </div>    
                              ))}
              </div>   
          </div>
        </div>
    )
}