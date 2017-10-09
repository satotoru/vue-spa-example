import axios from 'axios'

export function postValue({ clickRect, selectedValue }) {
  return axios.post("/api", {
    clickRect,
    selectedValue
  });
}
