import React from 'react'
import FiltersList from '../components/FiltersList'
import Header from '../components/Header'

const Layout = (props) => {
    return (
        <div className="container">
            <div className="container__main">
                <Header />
                {props.children}
            </div>

            <div className="container__right">
                <FiltersList />
            </div>
        </div>
    )
}

export default Layout
