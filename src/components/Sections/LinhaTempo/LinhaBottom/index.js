import React from 'react'
import {scroller as scroll} from 'react-scroll'

import './styles.scss'

const LinhaBottom = ({current, setCurrent}) => {
    let nextName = '';
    if(current === 0){
        nextName = 'Infância'
    }else if(current === 1){
        nextName = 'Juventude'
    }else if(current === 2){
        nextName = 'Vida Adulta'
    }else if(current === 3){
        nextName = 'Origens'
    }

    const onClickBtn = () => {
        setCurrent(current === 3 ? 0 : current + 1)
        scroll.scrollTo('LinhaTempo');
    }

    return(
       <footer className="LinhaBottom">
           <button className="LinhaBottom__btn" onClick={onClickBtn}>
               {nextName}
           </button>
       </footer>
    )
}

export default LinhaBottom