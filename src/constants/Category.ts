import { toArray } from 'lodash-es'

enum Category {
  Love = '연애',
  Study = '학업',
  Job = '직업',
  Relation = '관계',
  Food = '음식',
  Etc = '기타',
}

export const categoryList = toArray(Category)

export default Category
