import HomePage from '../pages/home-page'
import BooksPage from '../pages/books-page'

const pageRouters = [
  {
    name: 'Главная',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    name: 'Книги',
    path: '/books',
    exact: true,
    component: BooksPage,
  },
  {
    name: 'Книги',
    path: '/books/:alias/:id',
    exact: false,
    component: BooksPage,
  },
]

export default pageRouters
