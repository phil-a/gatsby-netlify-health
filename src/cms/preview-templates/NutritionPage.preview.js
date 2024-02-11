import React from 'react'
import PropTypes from 'prop-types'
import { NutritionPageTemplate } from '../../templates/nutrition-page'

const NutritionPagePreview = ({ entry, getAsset, widgetFor }) => (
  <NutritionPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    content={widgetFor('body')}
  />
)

NutritionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default NutritionPagePreview
