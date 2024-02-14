require 'dotenv'
require 'mysql2'

Dotenv.load(File.expand_path('../../../../.env', __FILE__))

# Function to insert data into the MySQL database
def drop_schema
  begin
    # Build the connection options
    connection_options = {
      host: ENV['DB_HOST'],
      username: ENV['DB_USER'],
      password: ENV['DB_PW'],
      database: ENV['DB_NAME']
    }
    
    # Add the socket option only if DB_SOCKET is set
    connection_options[:socket] = ENV['DB_SOCKET'] if ENV['DB_SOCKET']

    # Connect to MySQL
    client = Mysql2::Client.new(connection_options)

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