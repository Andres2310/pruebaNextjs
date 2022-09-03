
function login() {

  const loginUser = async (auth) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(auth)
    });
    return response.json();
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    loginUser({
      email: ev.target.emailLogin.value,
      password: ev.target.passwordLogin.value
    })
      .then(res => console.log(res))
  }
  return (
    <div className="min-h-screen bg-slate-500 flex items-center justify-center">
      <div className="container max-w-lg border-2 rounded-md h-96">
        <div className=" max-w-sm ">
          <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input type="email" name="emailLogin" id="emailLogin" />

          <label htmlFor="password">Password</label>
          <input type="password" name="passwordLogin" id="passwordLogin" />
          <button className="bg-zinc-400" type="submit">Submit</button>
          
          <a href="">
            <span>Register</span>

          </a>

          </form>


        </div>

      </div>
    </div>
  )
}

export default login