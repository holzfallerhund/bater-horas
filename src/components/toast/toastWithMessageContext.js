import React, { PureComponent } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class SignInToastWithMessageContext extends PureComponent {
    componentDidMount() {
        if (this.props.error) {
            toast.error(this.props.error.message)
        }
    }

    componentDidUpdate() {
        if (this.props.error) {
            toast.error(this.props.error.message)
        }
    }

    render() {
        return (
            <ToastContainer position={ toast.POSITION.BOTTOM_CENTER } />
        )
    }
}

export default SignInToastWithMessageContext
