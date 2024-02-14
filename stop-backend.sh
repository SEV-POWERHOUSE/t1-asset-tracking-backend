#!/bin/bash

# Find the PID of the process using port 3031
BACKEND_PID=$(lsof -ti:3031)

# Check if a PID was found
if [ ! -z "$BACKEND_PID" ]; then
    echo "Stopping backend server running on PID $BACKEND_PID..."
    # Kill the process
    kill $BACKEND_PID
    # Optional: Use kill -9 if the process does not stop
    # kill -9 $BACKEND_PID
    echo "Backend server stopped successfully."
else
    echo "No backend server found running on port 3031."
fi