import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='m-0 p-0'>
    <nav className="navbar  w-100 d-flex justify-content-center" style={{width:"100%", height:"6%", position:"absolute",top:"94%"}}>
        <a className="navbar-brand" href="#">User Details Using Redux </a>
    </nav>
</div>
  )
}

export default Footer