const increaseRemainingVotes = (args) =>{
    return args['votes'] - args['amount']
}

const decreaseRemainingVotes = (args) =>{
    return args['votes'] + args['amount']
}

const changeRemaining = (cb1 , cb2, args) => {
    cb1(cb2(args))    
}

const updateUser = (cb, args) =>{
    return cb(args)
}

const handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }
  
  const handleSubmit = (args) => {
    setTimeout(() => {
      alert(JSON.stringify(args['values'], null, 2));
      args['cb'](false);
    }, 3000);
  }
export {
    increaseRemainingVotes, decreaseRemainingVotes,
    changeRemaining, updateUser,
    handleValidate,handleSubmit
}