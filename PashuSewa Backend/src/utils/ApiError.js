class ApiError extends Error{
  constructor(
    statusCode,
    message="Something Went Wrong",
    errors=[],
    stack=""
  ){
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false
    this.error = errors
    if(stack){
      this.stack = stack
    }
    else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
}

export {ApiError}