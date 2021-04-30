/* Internal dependencies */
import Category from 'constants/Category'

export function getConcernItemImageName(category: Category) {
  switch (category) {
    case Category.Love:
      return 'love'
    case Category.Study:
      return 'study'
    case Category.Job:
      return 'job'
    case Category.Relation:
      return 'relationship'
    case Category.Food:
      return 'food'
    case Category.Etc:
      return 'etc'
  }
}
