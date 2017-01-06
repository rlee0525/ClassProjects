# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
user1 = User.create!(user_name: 'Raymond')
user2 = User.create!(user_name: 'Yamini')

Poll.destroy_all
poll1 = Poll.create!(title: 'Best Food', author_id: 1)
poll2 = Poll.create!(title: 'Sleep Time', author_id: 2)

Question.destroy_all
que1 = Question.create!(content: "Which food would you have for the rest of your life", poll_id: 1)
que2 = Question.create!(content: "How much sleep do you get", poll_id: 2)

AnswerChoice.destroy_all
ans1 = AnswerChoice.create!(body: "None at all", question_id: 2)
ans2 = AnswerChoice.create!(body: "Just enough", question_id: 2)

ans3 = AnswerChoice.create!(body: "Bacon", question_id: 1)
ans4 = AnswerChoice.create!(body: "Tofurkey", question_id: 1)

Response.destroy_all
resp1 = Response.create!(answer_choice_id: 4, user_id: 2)
resp2 = Response.create!(answer_choice_id: 2, user_id: 1)
