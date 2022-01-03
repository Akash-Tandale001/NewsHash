import React from 'react'
import './login.css'

const Login = () => {
    return (
        
            // <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">

<div className='body'>
	<div className="main">  	
		<input  className='boxinput' type="checkbox" id="chk" aria-hidden="true" />

			<div class="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input className='boxinput' type="text" name="txt" placeholder="User name" required="" />
					<input className='boxinput' type="email" name="email" placeholder="Email" required="" />
					<input className='boxinput' type="password" name="pswd" placeholder="Password" required="" />
					<button className="loginbutton">Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input className='boxinput' type="email" name="email" placeholder="Email" required="" />
					<input className='boxinput' type="password" name="pswd" placeholder="Password" required="" />
					<button className="loginbutton">Login</button>
				</form>
			</div>
	</div>
    </div>
        
    )
}

export default Login
