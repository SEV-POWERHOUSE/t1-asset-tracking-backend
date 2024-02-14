#!/bin/bash

# Ensure the script stops on error
set -e

# Save the current directory
CURRENT_DIR=$(pwd)

# Navigate to the directory containing the Ruby scripts
cd .github/workflows/ruby-scripts

# Run the drop-schema script
echo "Dropping and recreating database schema..."
bundle exec ruby drop-schema.rb

# Navigate back to the original directory
cd $CURRENT_DIR

# Start the backend server in the background
echo "Starting the backend server..."
npm run start &

# Wait for a bit to allow the server to initialize
# NOTE: Adjust the sleep duration as necessary based on your backend's initialization time
sleep 10

# Run the insert data script
echo "Inserting initial data..."
cd .github/workflows/ruby-scripts
bundle exec ruby insert.rb
cd $CURRENT_DIR

# Correctly find the PID of the process using port 3031 after ensuring the server has had time to start
BACKEND_PID=$(lsof -ti:3031)

# Write the PID to a file
echo $BACKEND_PID > backend.pid
echo "Backend server started with PID $BACKEND_PID (saved in backend.pid)"

echo "Initial data inserted successfully. Backend server is running."
echo "To stop the backend server, use: ./stop-backend.sh"