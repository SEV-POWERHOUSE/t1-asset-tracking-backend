require 'dotenv/load'
require 'mysql2'

# Function to insert data into the MySQL database
def insert_data_to_mysql
  begin
    # Connect to MySQL
    client = Mysql2::Client.new(
      :host => ENV['DB_HOST'],
      :username => ENV['DB_USER'],
      :password => ENV['DB_PW'],
      :database => ENV['DB_NAME']
    )

    # drop schema if exists
    client.query("DROP DATABASE IF EXISTS `asset-t1`")

    # recreate schema
    client.query("CREATE DATABASE `asset-t1`")

    puts "Data inserted successfully."

  rescue Mysql2::Error => e
    puts "Error occurred: #{e.message}"
  ensure
    client.close if client
  end
end

# Call the function to insert data
insert_data_to_mysql
