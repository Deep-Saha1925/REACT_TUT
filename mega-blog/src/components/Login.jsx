import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from "react-redux";
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")

        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                }

                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

}

export default Login