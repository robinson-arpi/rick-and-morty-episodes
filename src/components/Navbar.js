import React from 'react'

const Navbar = ({brand, image_route, handleDownloadExcel}) => {
  return (
    <nav className="navbar">
      <div className="container display-container">
        <a className="navbar-brand" href="/">
          <img src={image_route} alt={brand} />
        </a>
        <button className="btn btn-success text-white" onClick = {handleDownloadExcel}>Descargar Excel</button>
      </div>
    </nav>

  )
}

export default Navbar