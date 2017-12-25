export const fetchSkills = (id) => {
  return $.ajax({
    method: "GET",
    url: "/api/skills",
    data: { id }
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

export const endorseSkill = (endorsement) => {
  console.log("hit");
  return $.ajax({
    method: "POST",
    url: "/api/endorsements",
    data: { endorsement }
  })
}
