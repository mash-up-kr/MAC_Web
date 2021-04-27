import { toArray } from 'lodash-es'

enum Category {
  Love = '연애',
  Study = '학업',
  Friend = '친구',
  Stock = '주식',
}

export const categoryList = toArray(Category)

export default Category
