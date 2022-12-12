import './index.css'

const Message = props => {
  const {message} = props
  const headerText = message ? 'Welcome User' : 'Please Login'

  return <h1>{headerText}</h1>
}

export default Message
