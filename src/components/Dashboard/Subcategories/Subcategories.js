import React from 'react'
import Link from 'next/link'


function Countries() {

  function setCountries() {
    let a = []
    for (let x=0; x<15; x++){4
      a.push(x)
    }
    return a.map((b, i) => {
      return (
        <Link href='/' key={i}>
          <a>
            <div className="country-item">
              <div className="country-item-wrapper">
                <div className="content-center country-img-wrapper">
                  <img src="/images/radio.svg" alt=""/>
                </div>
                <div className="content-center country-name">
                  <h2 className='text-2 font-1'>Top 100</h2>
                  <div className='content-center country-stations'>
                    <span className='total-station text-2 font-7'>Stations</span>
                    <span className='text-2 totals font-4'>45</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      )
    })
  }

  return (
    <div className="country-wrapper">
      <div className='content-center menu-header text-3'>
        <span className='font-2'>Europe</span>
      </div>
      <div className="country-list-wrapper">
        {setCountries()}
      </div>
    </div>
  )
}

export default Countries
