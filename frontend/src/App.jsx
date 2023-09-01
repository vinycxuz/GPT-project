import { useState } from 'react'
import { makeRequest } from './api'

import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => (setLog(...log, data))

  const [log, setLog] = useState([{message: "how i need to help you today? "}])

  async function request (message) {
    const response = await makeRequest(message)
    setLog(...log, response)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("message", {required: true})} />
        <input type="submit" onClick={() => request(onSubmit)}/>
      </form>
    </>
  )
}

export default App
