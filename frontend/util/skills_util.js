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

export const deleteSkill = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/skills/${id}`
  })
}

export const endorseSkill = (endorsement) => {
  return $.ajax({
    method: "POST",
    url: "/api/endorsements",
    data: { endorsement }
  })
}


export const unendorseSkill = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/endorsements/${id}`
  })
}
