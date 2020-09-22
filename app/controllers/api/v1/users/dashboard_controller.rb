class DashboardController < ApplicationController
  before_action :doorkeeper_authorize!, :current_resource_owner, except: [:fetch_blog_posts, :fetch_comments]

  @NOT_FOUND = 404
  @NOT_CONFIRMED = 100

  def fetch_blog_posts

  end

  def fetch_comments

  end

  def dashboard
    if (!@user.confirmed_at != nil)
      render json: {
        success: true,
        user: user.render()
      }
    else
      render json: {
        success: false,
        message: 'user has not confirmed email',
        code: @NOT_CONFIRMED
      }
  end

  def current_resource_owner
    if doorkeeper_token
        @user = User.find(doorkeeper_token.resource_owner_id)
    else
        render json: {
            success: false,
            message: 'user not found',
            code: @NOT_FOUND
        }
    end
  end
end