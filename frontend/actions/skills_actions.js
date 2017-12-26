import * as SkillsApiUtil from "../util/skills_util";

export const RECEIVE_ALL_SKILLS = "RECEIVE_ALL_SKILLS";
export const RECEIVE_SKILL = "RECEIVE_SKILL";
export const RECEIVE_ENDORSEMENT = "RECEIVE_ENDORSEMENT";
export const REMOVE_SKILL = "REMOVE_SKILL";

export const fetchSkills = (id) => dispatch => (
  SkillsApiUtil.fetchSkills(id).then((skills) => dispatch(receiveAllSkills(skills)))
);

export const fetchSkill = skill => dispatch => (
  SkillsApiUtil.fetchSkill(skill).then((skill) => dispatch(receiveSkill(skill)))
);

export const createSkill = (skill) => dispatch => {
  SkillsApiUtil.createSkill(skill).then((skill) => {
    dispatch(receiveSkill(skill))
  })
};

export const deleteSkill = (id) => dispatch => (
  SkillsApiUtil.deleteSkill(id).then((skill) => dispatch(removeSkill(skill)))
)

export const endorseSkill = (endorsement) => dispatch => (
  SkillsApiUtil.endorseSkill(endorsement).then((skill) => dispatch(receiveSkill(skill)))
)

export const unendorseSkill = (id) => dispatch => (
  SkillsApiUtil.unendorseSkill(id).then((skill) => dispatch(receiveSkill(skill)))
)

const receiveAllSkills = skills => ({
  type: RECEIVE_ALL_SKILLS,
  skills
});

const receiveSkill = skill => ({
  type: RECEIVE_SKILL,
  skill
});

const removeSkill = skill => ({
  type: REMOVE_SKILL,
  skill
})
