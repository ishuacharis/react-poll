const BASE_URI = "http://localhost:8000/api";
const headers = {
    headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Accept": "application/json"
    }
};
const connect  = async (args) => {
  const endPoint  = args["endPoint"];
  const body =  args["body"];
  const method = args["method"];
  const token  = args['token'] || '';
  const authorization = token ?  `Bearer ${token}` : '' ;
  headers["headers"]["Authorization"] = authorization;
  const uri = BASE_URI+endPoint; 
  const options = {
      method: method,
      headers: headers["headers"],
      body: JSON.stringify(body)
  }
  const response = await fetch(uri,options)
  if ( !response.ok ) {
      const error = await response.json();
      
      throw new Error(error['response']['message']);
  }

  return await response.json();
}
export const handleLogin = (args) => {
    return login(args)
  }
  
  export const handleRegister = (args) => {
    return register(args)
  }
  
  export const handleLogOut = (args) => {
    return logout(args)
  }
  
  export const login = async (args) => {
    return connect(args);
  }
  
  export const register = async (args) => {
    return connect(args);
  }
  
  export const logout = async (args) => {
    return connect(args);
  }
  
  export const vote = async (args) => {
    return await connect(args);
  };
  
  export const notifications = async (args) => {
  
    const endPoint  = args["endPoint"];
    const uri = BASE_URI+endPoint; 
    const response = await fetch(uri)
    if ( !response.ok ) {
        const error = await response.json();
        
        throw new Error(error['response']['message']);
    }
  
    return await response.json();
  
  }
  
  export const eviction = async (args) => {
    const endPoint  = args["endPoint"];
    const method = args["method"];
    const token  = args['token'] || '';
    const authorization = token ?  `Bearer ${token}` : '' ;
    headers["headers"]["Authorization"] = authorization;
    const uri = BASE_URI+endPoint; 
    const options = {
        method: method,
        headers: headers["headers"],
    }
    const response = await fetch(uri,options)
    if ( !response.ok ) {
        const error = await response.json();
        throw new Error(error['response']['message']);
    }
  
    return await response.json();
  };