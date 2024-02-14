require 'dotenv'
require 'mysql2'

Dotenv.load(File.expand_path('../../../../.env', __FILE__))

# Function to insert data into the MySQL database
def drop_schema
  begin
    # Connect to MySQL
    client = Mysql2::Client.new(
      :host => ENV['DB_HOST'],
      :username => ENV['DB_USER'],
      :password => ENV['DB_PW'],
      :database => ENV['DB_NAME'],
      :socket => ENV['DB_SOCKET']
    )

    # drop schema if exists
    client.query("DROP DATABASE IF EXISTS `asset-t1`")
    puts "Database dropped"

    # recreate schema
    client.query("CREATE DATABASE `asset-t1`")
    puts "Database created successfully."

  rescue Mysql2::Error => e
    puts "Error occurred: #{e.message}"
  ensure
    client.close if client
  end
end

# Call the function to insert data
drop_schema
