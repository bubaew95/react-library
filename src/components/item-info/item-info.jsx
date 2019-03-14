import React from 'react'
import LeftSliderbar from '../left-slidebar'
import BookList from '../nb-component/item-lists'
import { PageRow } from '../html-components'

const ItemInfo = props => {
  return <PageRow left={<BookList />} right={<LeftSliderbar />} />
}
export default ItemInfo
