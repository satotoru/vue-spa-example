import axios from 'axios'

export function postPinnedItem({ x, y, selectedValue }) {
  return axios.post("/api", {
    x,
    y,
    selectedValue
  });
}


export function getPinnedItems() {
  return axios.get("/api/pinned_items")
}
