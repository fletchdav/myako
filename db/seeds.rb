# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

Gig.destroy_all
file = File.join(Rails.root, 'app', 'assets','gigs' ,'test.csv')
CSV.foreach(file, {col_sep: ';'}) {|row| Gig.create(date: row[0], detail: row[1], passed: true)}
