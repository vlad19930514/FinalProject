import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../../actions/authActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import axios from "axios";
interface IMainUserListProps {
  search:string
}

const MainUserList: React.FC<IMainUserListProps> = (props) => {


  const dispatch = useDispatch()
 
 
  const auth = useTypedSelector((state)=>(state.auth))
 

 /*  console.log(loading,error,words) */


 const onDelete=(e:React.MouseEvent<HTMLButtonElement>)=>{
  


axios({ 
  method: 'post',
  url: 'auth/words/main_delete',

  params:{
    wordId: e.target.value,
    googleId:auth.googleId
}

}).then(res => {
  
 
  dispatch(fetchUser())

  
}).then(()=>{
  console.log(123);
  ;})
 }

 const onDeleteAndAdd=(e:any)=>{

  axios({
    method: 'post',
    url: 'api_user_words/addfromMainToWeek',
  
    params:{
      wordId: e.target.value,
      googleId:auth.googleId

  }
  
  }).then(res => {
    dispatch(fetchUser())
    console.log(res.config.params);
    console.log(res.data);
  }).then((res)=>{
    console.log("Готово");
    
  })
  
}

const positiveArr = auth.MainWords? auth.MainWords.filter(function(word) {
  
  
  return word.word === props.search;
}):[];


  return (
    <div>

 Слова на изучении
    
  


  
  

  

 
 
 
  <ul>
  <li >№</li>
    <li>Слово </li>
    <li>Перевод </li>
    <li>Транскрипция </li>
    <li>Удалить</li>
    <li>Перенести в следующий список </li>
  </ul>
   
    
    
{/* поисковик */}
    { 
   

    auth.MainWords&&props.search!==''?  positiveArr.map((word)=>(
  <div key={word._id}>
 
   <div>{auth.MainWords ?auth.MainWords.indexOf(word)+1 :null}</div>   <div>{word.word}</div>   <div>{word.translate}</div>   <div>{word.transcription}</div>  <div><button  className="fas fa-trash-alt" value={word._id} onClick={onDelete}>
     Удалить
    </button> </div> {/* <div><button  className="fas fa-trash-alt" value={word._id} onClick={onDeleteAndAdd}> Удалить
    </button> </div>   */}
    </div>
    )):null}


{auth.MainWords&&props.search===''?  auth.MainWords.map((word)=>(
  <div key={word._id}>
 
   <div>{auth.MainWords ? auth.MainWords.indexOf(word)+1:null}</div>   <div>{word.word}</div>   <div>{word.translate}</div>   <div>{word.transcription}</div>  <div><button  className="fas fa-trash-alt" value={word._id} onClick={onDelete}>
     Удалить
    </button> </div> {/* <div><button  className="fas fa-trash-alt" value={word._id} onClick={onDeleteAndAdd}> 
    Удалить и 
    </button> </div> */}
    </div>
    )):null}





    



      
    </div>
  );
};

export default MainUserList;
