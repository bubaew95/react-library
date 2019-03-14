import React, { Component } from 'react'

import HeroSection from '../../components/hero-section'
import FeaturesSection from '../../components/features-section'
import LetestBooksSection from '../../components/nb-component/last-product-items'
import ProductFilterSection from '../../components/product-filter-section'
import BannerSection from '../../components/banner-section'
import BookList from '../../components/nb-component/item-lists'

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroSection />
        <FeaturesSection />
        <LetestBooksSection />

        <ProductFilterSection>
          <BookList col="col-md-3 col-sm-6" />
        </ProductFilterSection>

        <BannerSection />
      </React.Fragment>
    )
  }
}

export default HomePage
