const Booleanassignment = () => {
const isLoggedIn = true;
const isLoggedOut = false;
const isError = true;
const isAdmin = false;
const isDarkMode = true;
const isLoading = false;
const isSubmitted = true;
const isFormValid = false;
const isUserActive = true;
const isLightMode = true;


return(<>

{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
<h2>{isLoggedOut ? "You have been logged out" : "Please Login"} </h2>
<h3>{isError ? "An error occurred" : "No errors found"}</h3>
<h4>{isAdmin ? "You have admin privileges" : "You are a regular user"}</h4>
<p>{isDarkMode ? "Dark mode is enabled" : "Light mode is enabled"}</p>
<p> { isLoading && "Loading"}</p>
<p>{isSubmitted && "Form submitted successfully"}</p>
<h1>{isFormValid && "Form is valid" }</h1>
<p>{isUserActive && "User is active" }</p>
<p>{isLightMode && "Light mode is enabled" }</p>














</>)

}
 export default Booleanassignment