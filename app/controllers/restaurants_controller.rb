class RestaurantsController < ApplicationController

  # GET /restaurants
  def index
    @restaurants = Restaurant.all

    render json: @restaurants
  end

end
