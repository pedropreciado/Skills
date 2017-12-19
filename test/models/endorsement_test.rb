# == Schema Information
#
# Table name: endorsements
#
#  id          :integer          not null, primary key
#  skill_id    :integer
#  author_id   :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class EndorsementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
