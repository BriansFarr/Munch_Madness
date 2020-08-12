class CreateJoinTableFoodsRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_join_table :foods, :restaurants do |t|
      # t.index [:food_id, :restaurant_id]
      # t.index [:restaurant_id, :food_id]
    end
  end
end
