import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg tw-fixed tw-bg-blue-100 tw-w-screen tw-z-50">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/branding/wave-logo.svg" alt=""/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse tw-ml-60" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 tw-font-bold">
            <li class="nav-item tw-text-blue-700">
              <a class="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2 tw-bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-primary tw-m-3" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    </div>
  )
}
