export const fetchSkills = () => {
  return $.ajax({
    method: "GET",
    url: "/api/skills"
  })
}

export const fetchSkill = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/skills/${id}`
  })
}

export const createSkill = (skill) => {
  return $.ajax({
    method: "POST",
    url: "/api/skills",
    data: { skill }
  })
}

export const endorseSkill = (id) => {
  return $.ajax({
    method: "POST",
    url: "/api/endorsements",
    data: { id }
  })
}
