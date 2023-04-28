import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light d-flex justify-content-center">
                <a className="navbar-brand" href="#">User Details App Using React </a>
            </nav>
        </div>
    )
}

export default Header;