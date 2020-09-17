module CustomTokenErrorResponse
  def body
    {
      status_code: 400,
      message: 'Bad Request',
      details: 'The credentials entered were invalid.'
    }
    # or merge with existing values by
    # super.merge({key: value})
  end
end