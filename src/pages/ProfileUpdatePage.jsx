import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateAvatarUserThunk} from 'redux/operations'
import {Button,Box,} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ProfileUpdatePage = () => {
  const [file, setFile] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate();

 const handleChange = (event)=>{
    setFile(event.target.files[0])
 }
 const handleUpload = ()=>{
    dispatch(updateAvatarUserThunk(file))
    navigate('/profile')
 }

  return (
    <Box>
      <h2>Update Profile</h2>
      <input type="file" onChange={handleChange} />
      <Button type="button" onClick={handleUpload}>Update</Button>
    </Box>
  )
}

export default ProfileUpdatePage
