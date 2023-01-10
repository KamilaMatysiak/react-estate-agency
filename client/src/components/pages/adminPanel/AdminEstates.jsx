import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getEstates} from '../../../actions/estates'

const AdminEstates = () => {
  const dispatch = useDispatch();
  const { estates } = useSelector((state) => state.estates);
  const [currentID, setCurrentID] = useState(0);

  useEffect(() => {
    dispatch(getEstates());
  }, [currentID, dispatch])


  console.log(estates);
  return (
    <>
    {estates.map((estate) => (
      <div key={estate._id} style={{width: '100%', background: '#e3e3e3', margin: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}>{estate.name}</div>
        <div className='m8' style={{width: '200px', maxWidth: '300px', textAlign: 'left'}}><b>{estate.estateId}</b></div>
      </div>
    ))}
    </>
  )
}

export default AdminEstates