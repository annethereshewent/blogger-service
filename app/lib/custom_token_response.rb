module CustomTokenResponse
  def body
    user = User.find(@token.resource_owner_id)

    additional_data = {
        user: user.render(),
    }

    # call original `#body` method and merge its result with the additional data hash
    super.merge(additional_data)
  end
end