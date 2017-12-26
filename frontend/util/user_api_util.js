export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: "/api/users"
  })
}

export const fetchUser = (id) => {
  console.log("hit");
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  })
}
