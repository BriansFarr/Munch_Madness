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
@tacob = Restaurant.create(name: 'Taco Bell', image: 'https://www.tacobell.com/medias/Taco-Bell-Logo-Bell-Only2.svg?context=bWFzdGVyfGltYWdlc3wyNTk0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxNi9oM2YvODgyNTMyNjE3NDIzOC5zdmd8MTg2NWZhODE0YTA1ZWNiZWMyMzc5YmQ3MDQzN2U1OTJjYmUwMzFhNTAzMGRhNWNjODFkMGIyOTE1OTJmZTE0MQ')
@kfc = Restaurant.create(name: 'Kentucky Fried Chicken', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png')
@wendys = Restaurant.create(name: 'Wendys', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/1200px-Wendy%27s_full_logo_2012.svg.png')
@innout = Restaurant.create(name: 'In N Out', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/InNOut.svg/1200px-InNOut.svg.png')
@arbys = Restaurant.create(name: 'Arbys', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Arby%27s_logo.svg/1200px-Arby%27s_logo.svg.png')
@shakeshack = Restaurant.create(name: 'Shake Shack', image: 'https://cdn.shakeshack.com/wp-content/uploads/2015/03/Shake-Shack.png')
@checkers = Restaurant.create(name: 'Checkers / Rallys', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Checkers_logo.svg/1200px-Checkers_logo.svg.png')
@whataburg = Restaurant.create(name: 'Whataburger', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Whataburger_logo.svg/1200px-Whataburger_logo.svg.png')
@churchs = Restaurant.create(name: 'Churchs Chicken', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Church%27s_Chicken_logo.svg/1200px-Church%27s_Chicken_logo.svg.png')
@jackinbox = Restaurant.create(name: 'Jack in the Box', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Jack_in_the_Box_2009_logo.svg/200px-Jack_in_the_Box_2009_logo.svg.png')
@carlsjr = Restaurant.create(name: 'Carls Jr', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCarl%2527s_Jr.&psig=AOvVaw3cOjFgLN5xzAB72m1Et0-E&ust=1597514345807000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCGivikm-sCFQAAAAAdAAAAABAD')
@whitec = Restaurant.create(name: 'White Castle', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/White_Castle_logo.svg/1200px-White_Castle_logo.svg.png')
@popeye = Restaurant.create(name: 'Popeyes', image: 'https://w0.pngwave.com/png/547/143/popeyes-logo-graphics-fried-chicken-fried-chicken-png-clip-art.png')
@chickfil = Restaurant.create(name: 'Chick Fil A', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Chick-fil-A_Logo.svg/1280px-Chick-fil-A_Logo.svg.png')
@dairyq = Restaurant.create(name: 'Dairy Queen', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dairy_Queen_logo.svg/1200px-Dairy_Queen_logo.svg.png')

puts "#{Restaurant.count} created"

@nuggets.restaurants.push(@mcdon)