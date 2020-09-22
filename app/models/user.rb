
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  has_many :access_grants,
    class_name: 'Doorkeeper::AccessGrant',
    foreign_key: :resource_owner_id,
    dependent: :delete_all # or :destroy if you need callbacks

  has_many :access_tokens,
    class_name: 'Doorkeeper::AccessToken',
    foreign_key: :resource_owner_id,
    dependent: :delete_all # or :destroy if you need callbacks

  has_attached_file :avatar, :styles => { large: '500x500#', medium: '150x150#', thumb: '50x50#', small: '80x80#' }, :default_url => '/images/user_icon.png'
	validates_attachment :avatar, content_type: { content_type: ['image/jpeg', 'image/gif', 'image/png'] }

  has_attached_file :banner, styles: { medium: '1500x>' }, default_url: '/images/default_banner.jpg'
  validates_attachment :banner, content_type: { content_type: ['image/jpeg', 'image/gif', 'image/png'] }

  def render
    {
      email: self.email,
      username: self.username,
      description: self.description,
      avatar_large: self.avatar.url(:large),
      avatar_medium: self.avatar.url(:medium),
      avatar_small: self.avatar.url(:small),
      avatar_thumb: self.avatar.url(:thumb),
      gender: self.gender
    }
  end
end
