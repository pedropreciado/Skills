import * as SkillsApiUtil from "../util/skills_util";

export const RECEIVE_ALL_SKILLS = "RECEIVE_ALL_SKILLS";
export const RECEIVE_SKILL = "RECEIVE_SKILL";
export const RECEIVE_ENDORSEMENT = "RECEIVE_ENDORSEMENT";

export const fetchSkills = () => dispatch => (
  SkillsApiUtil.fetchSkills().then((skills) => dispatch(receiveAllSkills(skills)))
);

export const fetchSkill = skill => dispatch => (
  SkillsApiUtil.fetchSkill(skill).then((skill) => dispatch(receiveSkill(skill)))
);

export const createSkill = (skill) => dispatch => (
  SkillsApiUtil.createSkill(skill).then((skill) => dispatch(receiveSkill(skill)))
);

export const endorseSkill = (id) => dispatch => (
  SkillsApiUtil.endorseSkill(id).then((skill) => dispatch(receiveSkill(skill)))
)

const receiveAllSkills = skills => ({
  type: RECEIVE_ALL_SKILLS,
  skills
});

const receiveSkill = skill => ({
  type: RECEIVE_SKILL,
  skill
});
