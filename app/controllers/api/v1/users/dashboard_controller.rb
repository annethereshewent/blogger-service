class DashboardController < ApplicationController
  before_action :doorkeeper_authorize!, :current_resource_owner, except: [:fetch_blog_posts, :fetch_comments]
end