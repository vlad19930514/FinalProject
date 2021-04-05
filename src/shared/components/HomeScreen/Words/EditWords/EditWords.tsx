import React ,{useState, useRef}  from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../../actions/authActions';
import MainUserList from '../UserList/MainUserList';


interface IEditWordsProps {}

const EditWords: React.FC<IEditWordsProps> = () => {
  const dispatch = useDispatch()
 
  const listWords = useTypedSelector((state)=>state.auth.MainWords)

  
  const wordInputRef = useRef<HTMLInputElement | null>(null)
  const translateInputRef = useRef<HTMLInputElement | null>(null)
  const transcriptionInputRef = useRef<HTMLInputElement | null>(null)
const [searchInput, setSearchInput] = useState('')


  const handleSubmit =  (e:any) => {
      e.preventDefault();
     //удалить any
      
     
      const { word,translate,transcription } = e.target
     
      axios({
        method: 'post',
        url: '/auth/words/add',
     
        params:{
          word: word.value,
          translate: translate.value,
          transcription: transcription.value
      }
  
    }).then( res => {
      
     
        dispatch(fetchUser())
       
    
      
     
      
      
    }).then( (res) => {
     
    
      //обновляем плэйсхолдер
      if(!wordInputRef.current || !translateInputRef.current || !transcriptionInputRef.current){
        return
      }
      wordInputRef.current.value=""
      translateInputRef.current.value=""
      transcriptionInputRef.current.value=""
      setSearchInput('')
   })
    
   
    }

    const searchOnChange= (inp:React.ChangeEvent<HTMLInputElement>)=>{

setSearchInput(inp.target.value.toLowerCase())

    }


  return (
    <div>
    <div className="post">
 <form className="post" onSubmit={handleSubmit}>

 <input ref={wordInputRef} id="mainInput" placeholder='слово'   type='text' name="word" onChange={searchOnChange} required></input>
 <input ref={translateInputRef} placeholder='перевод' type='text' name="translate" required></input>
 <input ref={transcriptionInputRef} placeholder='транскрипция' type='text' name="transcription" required></input>
   <button type="submit">Add new word</button>
 </form>
 </div>
 
 <MainUserList search={searchInput}/>

    
 </div>
  );
};

export default EditWords;
