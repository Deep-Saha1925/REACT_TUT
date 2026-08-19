import React, {useCallback} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from "../../appwrite/config"
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function PostForm() {

    const {register, handleSubmit, watch} = useForm()

  return (
    <div>PostForm</div>
  )
}

export default PostForm