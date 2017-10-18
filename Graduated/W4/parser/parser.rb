require 'csv'
require 'sqlite3'

# Reading the CSV file
companies = CSV.read("TechCrunchcontinentalUSA.csv")

# Select only the web companies
web_companies = companies.select { |company| company[3] == "web" }

# Find duplicates
names = Hash.new(0)
web_companies.each { |company| names[company[1]] += 1 }
dups = names.select { |_, v| v > 1 }

# Date comparison
MONTHS = [
  "Jan", "Feb", "Mar", "Apr", 
  "May", "Jun", "Jul", "Aug", 
  "Sep", "Oct", "Nov", "Dec"
]

dups.keys.each do |name|
  set = web_companies.select { |company| company[1] == name }
  years = set.map { |c| c[6][-2..-1] }
  most_recent_year = years.max_by { |y| y.to_i }
  remaining_set = set.select { |company| company[6][-2..-1] == most_recent_year }
  delete_set = set.select { |company| company[6][-2..-1] != most_recent_year }
  delete_set.each { |c| web_companies.delete(c) }

  if remaining_set.length > 1
    months = remaining_set.map { |c| MONTHS.index(c[6][-6..-4]) }
    most_recent_month = MONTHS[months.max]
    delete_set = remaining_set.select { |company| company[6][-6..-4] != most_recent_month }
    remaining_set = remaining_set.select { |company| company[6][-6..-4] == most_recent_month }
    delete_set.each { |c| web_companies.delete(c) }
  end

  if remaining_set.length > 1
    days = remaining_set.map { |c| c[6][0..-8] }
    most_recent_day = days.max
    delete_set = remaining_set.select { |company| company[6][0..-8] != most_recent_day }
    remaining_set = remaining_set.select { |company| company[6][0..-8] == most_recent_day }
    delete_set.each { |c| web_companies.delete(c) }
  end

  if remaining_set.length > 1
    amounts = remaining_set.map { |c| c[7] }
    most_amount = amounts.max
    delete_set = remaining_set.select { |company| company[7] != most_amount }
    remaining_set = remaining_set.select { |company| company[7] == most_amount }
    delete_set.each { |c| web_companies.delete(c) }
  end

  if remaining_set.length > 1
    delete_set = remaining_set.drop(1)
    delete_indices = []
    delete_set.each { |c| delete_indices << web_companies.index(c) }
    delete_indices.each { |idx| web_companies.delete_at(idx) }
  end
end

begin

  db = SQLite3::Database.open "companies.db"
  db.execute "DROP TABLE IF EXISTS Companies"
  db.execute "CREATE TABLE IF NOT EXISTS Companies(Id INTEGER PRIMARY KEY,
      Permalink TEXT, Company TEXT, NumEmps INT, Catergory TEXT, City TEXT, State TEXT, FundedDate TEXT,
      RaisedAmt INT, RaisedCurrency TEXT, Round TEXT)"

  (1..web_companies.length).each do |i|
    company = web_companies[i - 1]
    company.map! { |el| el.nil? ? 0 : el }
    company.each_with_index do |el, idx|
      company[idx] = el.delete("\'") if el.is_a?(String) && el.include?("\'")
    end

    db.execute "INSERT INTO Companies VALUES(#{i}, '#{company[0]}', '#{company[1]}', #{company[2]}, '#{company[3]}', '#{company[4]}', '#{company[5]}', '#{company[6]}', #{company[7].to_i}, '#{company[8]}', '#{company[9]}')"
  end
  
  p db.execute "SELECT Company, MAX(RaisedAmt)-AVG(RaisedAmt) AS diff FROM Companies GROUP BY State ORDER BY diff DESC LIMIT 1"

rescue SQLite3::Exception => e

  puts "Exception occurred"
  puts e

ensure
  db.close if db
end


# BONUS: YOUR CODE GOES HERE
