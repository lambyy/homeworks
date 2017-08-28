require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { User.new(email: 'cat', password: 'good_password') }

  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest).with_message("Password can't be blank") }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'verify password' do
    it 'checks if the password is correct' do
      expect(user.is_password?('good_password')).to be true
    end
    it 'returns false if password is incorrect' do
      expect(user.is_password?('bad_password')).to be false
    end
  end

  describe '#reset_session_token!' do
    it 'resets the session token' do
      old_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_session_token)
    end
    it 'saves new session token to user' do
      expect(user.reset_session_token!).to eq(user.session_token)
    end
  end

  describe '#find_by_credential' do
    before { user.save!}

    it 'returns user given good credentials' do
      expect(User.find_by_credentials('cat', 'good_password')).to eq(user)
    end
    it 'returns nil given bad predentials' do
      expect(User.find_by_credentials('cat', 'bad_password')).to_not eq(user)
    end
  end
end
