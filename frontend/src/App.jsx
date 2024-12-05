import { useState } from 'react'
import { makeRequest } from './api/index'

import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => (console.log(data))

  function request () {
    console.log(onSubmit)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("message", {required: true})} />
        <input type="submit" onClick={() => request()}/>
      </form>
    </>
  )
}

export default App
