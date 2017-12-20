require 'test_helper'

class Api::SkillControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_skill_new_url
    assert_response :success
  end

  test "should get index" do
    get api_skill_index_url
    assert_response :success
  end

  test "should get show" do
    get api_skill_show_url
    assert_response :success
  end

  test "should get create" do
    get api_skill_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_skill_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_skill_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_skill_destroy_url
    assert_response :success
  end

end
