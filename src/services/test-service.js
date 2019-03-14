export class TestService {
  _books_list = [
    {
      id: 1,
      year: 2002,
      img: '/static/images/etnografiya/110.g1illakhijn_haz.jpg',
      file_path: '110.g1illakhijn_haz.pdf',
      id_cat: 40,
      name:
        'Г1иллакхийн хазна - ирсан некъаш. - Гроз. рабочий, Грозный, 2002. - 189 с.',
      url: '',
      text: '63.5 / Б 519',
      author: 'Берсанов Х.-А.',
    },
    {
      id: 2,
      year: 1,
      img: '/static/images/history_caucas/410.kavkaz_i_tsivili.jpg',
      file_path: '410.kavkaz_i_tsivili.pdf',
      id_cat: 42,
      name:
        'Кавказ и цивилизации Востока в Древности и Средневековье. - Владикавказ: Из- во СОГУ, 1993. - 212 с.',
      url: '',
      desc: '63.3 / К 126',
      key: '63.3 / К 126',
      text: '63.3 / К 126',
      author: '-',
    },
    {
      id: 3,
      year: 1,
      img: '/static/images/history_caucas/409.kavkaz_i_tsivili.jpg',
      file_path: 'kavkaz_i_tsivili.pdf',
      vis: 0,
      id_cat: 42,
      name:
        'Кавказ и цивилизации Древнего Востока:— Орджоникидзе: Ир, 1989.— 116 с.',
      text: '63.3 / К 126',
      author: '-',
    },
    {
      id: 4,
      year: 2010,
      img: '/static/images/socialnie_nauki/14.sotsiokulturnaya.jpg',
      file_path: 'sotsiokulturnaya.pdf',
      id_cat: 49,
      name:
        'Социокультурная идентификация в регионе конфликта. - Грозный: Гроз. рабочий, 2010. - 112 с. - ISBN 978-5-900231-72-3',
      text: '60.54 / Ю 916',
      author: 'Юсупов М.М.',
    },
  ]

  _last_books_list = [
    {
      id: 11,
      year: 1,
      img: '/static/images/literatura/270.vybor_rasskazy.jpg',
      file_path: 'vybor_rasskazy.pdf',
      id_cat: 7,
      name:
        'Выбор: рассказы на чеч. яз. - Грозный: Чеч.-Инг. кн. изд., 1987.-83 с.',
      text: '84 / Д 802',
      author: 'Дугин А.',
    },
    {
      id: 12,
      year: 1,
      img: '/static/images/literatura/269.katavasiya_yumor.jpg',
      file_path: 'katavasiya_yumor.pdf',
      vis: 0,
      id_cat: 7,
      name:
        'Катавасия: Юмор, сатира. - Грозный: Чеч.-Инг. кн. изд., 1990. - 136с.',
      url: '',
      desc: '84 / Г 192',
      key: '84 / Г 192',
      text: '84 / Г 192',
      date: '2019-02-21 18:02:08',
      author: 'Ганижев Б.З.',
      recomented: '0',
      dispatch: '0',
    },
    {
      id: 13,
      year: 1,
      img: '/static/images/literatura/268.bolshie_dela_ma.jpg',
      file_path: 'bolshie_dela_ma.pdf',
      vis: 0,
      id_cat: 7,
      name:
        'Большие дела маленького Микиня: на чеч. яз. - Грозный: Чеч.-Инг. кн. изд., 1961. - 44 с.',
      url: '',
      desc: '84 / В 17',
      key: '84 / В 17',
      text: '84 / В 17',
      date: '2019-02-21 18:02:08',
      author: 'Ванаг Ю. П.',
      recomented: '0',
      dispatch: '0',
    },
    {
      id: 14,
      year: 1,
      img: '/static/images/history_caucas/421.v_pamyati_narodn.jpg',
      file_path: 'v_pamyati_narodn.pdf',
      vis: 0,
      id_cat: 42,
      name: 'В памяти народной. - Грозный: Чеч.-Инг. кн. изд., 1975. - 181 с.',
      url: '',
      desc: '63.3 / В 114',
      key: '63.3 / В 114',
      text: '63.3 / В 114',
      date: '2019-02-21 18:02:08',
      author: '-',
      recomented: '0',
      dispatch: '0',
    },
  ]

  _categories_list = [
    {
      id: 39,
      name: 'Археология (63.4)',
      bbk: '63.4',
      name_url: 'arheologiya',
      parent_id: 0,
      directory: 'arheologiya',
      position: 3,
    },
    {
      id: 54,
      name: 'Архивное дело. Архивоведение (79.3)',
      bbk: '79.3',
      name_url: 'arhivnoe_delo',
      parent_id: 0,
      directory: 'arhivnoe_d',
      position: 3,
    },
    {
      id: 65,
      name: 'Библиографические ресурсы (91)',
      bbk: '91',
      name_url: 'bibliograficheskie_resursy_(91)',
      parent_id: 0,
      directory: 'bibliograf',
      position: 3,
    },
  ]

  /**
   * get load all books
   */
  getBooks = async () => {
    return this._books_list.map(this._transformBook)
  }

  /**
   * get load book of id
   * @param {int} id
   */
  getBook = async id => {
    return this._transformBook(this._transformBook[0])
  }

  /**
   * get all categories
   */
  getAllCategories = async () => {
    return this._categories_list.map(this._transformCategory)
  }

  /**
   * get last books
   */
  getLastBooks = async () => {
    return this._last_books_list.map(this._transformBook)
  }

  /**
   * get cat books
   * @param {int} id
   */
  getCatBooks = async id => {
    const allBooks = [...this._last_books_list, ...this._books_list]
    return allBooks.map(this._transformBook)
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
