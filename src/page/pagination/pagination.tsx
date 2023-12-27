import React from 'react'
import Pagination from '../../ayongUI/components/pagination'

const RadioPage = () => {
  return (
    <div>
      <h1>Pagination</h1>
      <fieldset>
        <legend>基本</legend>
        <Pagination current={1} />
      </fieldset>
    </div>
  )
}

export default RadioPage
