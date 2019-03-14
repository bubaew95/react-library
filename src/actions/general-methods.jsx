export const isLoad = (type, isload) => {
  return {
    type,
    isload,
  }
}

export const error = (type, message) => {
  return {
    type,
    message,
  }
}

export const fetchItems = (type, items) => {
  return {
    type,
    items,
  }
}
