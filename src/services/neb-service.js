export class NebService {
  _HOST = ''

  /**
   * api service
   * @param {string} url
   */
  async getApi(url) {
    const res = await fetch(`${this._HOST}${url}`)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`, `received ${res.status}`)
    }
    return await res.json()
  }

  /**
   * get load all books
   */
  getBooks = async () => {
    const res = await this.getApi(`books/index`)
    return res.map(this._transformBook)
  }

  /**
   * get load book of id
   * @param {int} id
   */
  getBook = async id => {
    const book = await this.getApi(`books/view/${id}`)
    return this._transformBook(book)
  }

  /**
   * get all categories
   */
  getAllCategories = async () => {
    const res = await this.getApi(`books/categories`)
    return res.map(this._transformCategory)
  }

  /**
   * get last books
   */
  getLastBooks = async () => {
    const res = await this.getApi(`books/lastbooks`)
    return res.map(this._transformBook)
  }

  /**
   * get cat books
   * @param {int} id
   */
  getCatBooks = async id => {
    const res = await this.getApi(`books/catbooks/${id}`)
    return res.map(this._transformBook)
  }

  /**
   * transform category response api
   * @param {object} cat
   */
  _transformCategory = cat => {
    return {
      id: cat.id,
      title: cat.name,
      title_url: cat.name_url,
      bbk: cat.bbk,
    }
  }

  /**
   * transform book response api
   * @param {object} book
   */
  _transformBook = book => {
    return {
      id: book.id,
      title: book.name,
      bbk: book.text,
      author: book.author,
      image: book.img,
      pdf: book.file_path,
      year: book.year,
      id_cat: book.id_cat,
    }
  }
}
