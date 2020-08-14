# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.destroy_all
Food.destroy_all
User.destroy_all

@admin = User.create(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@nuggets = Food.create(name: 'Chicken Nuggets', review: 'mmmm.... Im loving it', user: @admin)
puts "#{Food.count} foods created"

@burgerk = Restaurant.create(name: 'Burger King', image: 'https://1000logos.net/wp-content/uploads/2016/10/Burger-King-Logo.png')
@mcdon = Restaurant.create(name: 'McDonalds', image: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-Logo.png')
@tacob = Restaurant.create(name: 'Taco Bell')
@kfc = Restaurant.create(name: 'Kentucky Fried Chicken')
@wendys = Restaurant.create(name: 'Wendys')
@innout = Restaurant.create(name: 'In N Out')
@arbys = Restaurant.create(name: 'Arbys')
@shakeshack = Restaurant.create(name: 'Shake Shack')
@checkers = Restaurant.create(name: 'Checkers / Rallys')
@whataburg = Restaurant.create(name: 'Whataburger')
@churchs = Restaurant.create(name: 'Churchs Chicken')
@jackinbox = Restaurant.create(name: 'Jack in the Box')
@carlsjr = Restaurant.create(name: 'Carls Jr')
@whitec = Restaurant.create(name: 'White Castle')
@popeye = Restaurant.create(name: 'Popeyes')
@chickfil = Restaurant.create(name: 'Chick Fil A')
@dairyq = Restaurant.create(name: 'Dairy Queen')

puts "#{Restaurant.count} created"

@nuggets.restaurants.push(@mcdon)