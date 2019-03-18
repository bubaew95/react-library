import React from 'react'

const HeaderSearch = () => {
  return (
    <div className="col-xl-6 col-lg-5">
      <form className="header-search-form">
        <input type="text" placeholder="Search on divisima ...." />
        <button>
          <i className="flaticon-search" />
        </button>
      </form>
    </div>
  )
}

export default HeaderSearch
