import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: RouteComponent, isAuth }) => {

    if (!isAuth) {
        return <Navigate to='/' />
    }

    return (
        <div>
            <RouteComponent />
        </div>
    )
}

export default PrivateRoute