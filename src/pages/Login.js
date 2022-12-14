import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../_services/account.services';

const Login = () => {
    let navigate = useNavigate()
    /**Pour les simples formulaires */
    // const [login, setLogin] = useState('valdo')
    // const [password,setPassword] = useState('valdo123')

    
    /**Methode utilisé lorsqu'il y a un nombre important de champs */
    const [formData, setFormData] = useState({
        login: 'valdo',
        password: 'valdo123'
    })
    const[errMsg, setErrMsg] = useState('')
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    //envoi des données
    const onSubmit = (e)=>{
        setErrMsg('')
        e.preventDefault()
        accountService.login(formData)
        .then(res => {
            console.log(res)
            accountService.saveToken(res.data.token)
            navigate('/admin',{replace:true})
        })
        .catch(error => setErrMsg(error.response.data.error))
    }
    return (
        <div className="min-h-screen bg-gray-300 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl mx-auto text-center">
                <span className="text-2xl font-light">Veuillez vous connecter</span>
                <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                    <div className="h-2 bg-indigo-400 rounded-t-md"></div>
                    <div className="py-6 px-8">
                        <form onSubmit={onSubmit}>
                            <label className="block font-semibold">Login</label>
                            <input type="text" name='login' placeholder="login" value={formData.login} onChange={onChange} minLength="5" required className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" />
                            <label className="block mt-3 font-semibold">Mot de passe</label>
                            <input name='password' type="password" placeholder="Password" value={formData.password} onChange={onChange} minLength="6" required className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" />
                            <div className="flex justify-between items-baseline">
                                <button className="shadow-sm bg-blue-400 px-4 rounded text-white my-2 py-1 mt-4">Login</button>
                                <a href="/admin" className="text-sm hover:underline">Mot de passe oublié?</a>
                            </div>
                            <span className='text-red-500 flex justify-center'>{ errMsg}</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;