require 'dotenv'
require 'mysql2'

Dotenv.load(File.expand_path('../../../../.env', __FILE__))

# Function to insert data into the MySQL database
def insert_data_to_mysql
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

    # userGroup insert query
    client.query("INSERT INTO `userGroup` (name) VALUES 
    ('Admin'),
    ('MaintenanceManager'),
    ('MaintenanceWorker'),
    ('ITManager'),
    ('ITWorker'),
    ('SupportCentralManager'),
    ('SupportCentralWorker')
    ON DUPLICATE KEY UPDATE name = VALUES(name);"
    )

    # user insert query
    client.query("INSERT INTO `user` (fName, lName, email, userGroupId, devPermission) VALUES 
    ('Jaxen', 'McRay', 'jaxen.mcray@eagles.oc.edu', 1, 1),
    ('Zane', 'Fike', 'z.fike@eagles.oc.edu', 1, 1),
    ('Solomon', 'Granger', 'solomon.granger@eagles.oc.edu', 1, 1),
    ('Justin', 'Davis', 'justin.davis@eagles.oc.edu', 1, 1)
    ON DUPLICATE KEY UPDATE email=email;"
    )

    puts "Data inserted successfully."

  rescue Mysql2::Error => e
    puts "Error occurred: #{e.message}"
  ensure
    client.close if client
  end
end

# Call the function to insert data
insert_data_to_mysql