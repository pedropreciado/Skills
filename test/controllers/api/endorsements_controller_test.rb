require 'test_helper'

class Api::EndorsementsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_endorsements_index_url
    assert_response :success
  end

  test "should get create" do
    get api_endorsements_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_endorsements_destroy_url
    assert_response :success
  end

end
