import React, {useState} from 'react';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

function Search() {
const dispatch = useDispatch();  
const [newSearch, setNewSearch] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch({
          type:'GIPH_REQUEST',
          payload: newSearch
      });
      setNewSearch('');
    }
// let [search, setSearch] = useState({id: + 1 , name: ''})

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input value={newSearch} 
      type='text' 
      placeholder='giphy search'
      onChange={event => setNewSearch(event.target.value)}
      ></input>
      <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Search;

// function Feeling() {
// //   const [newFeeling, setFeeling] = useState('');
//   const dispatch = useDispatch();
// //   const history = useHistory();  

//   const handleSubmit = (event) => {
//       event.preventDefault();
//       dispatch({
//           type:'GIPH_REQUEST',
//           payload: category
//       });
//     //   setFeeling('');
//     //   history.push('/understanding');
//   }

//   return(
//       <div>
//           <h1>How are you feeling today?</h1>
//           <form onSubmit={handleSubmit}>
//           <input
//             type="number"
//             value={category}
//             placeholder="Feeling?"
//             onChange={event => setFeeling(event.target.value)}
//           ></input>
//           <button type="submit">NEXT</button>
//           </form>
//       </div>
//   );
// }

// export default Feeling;