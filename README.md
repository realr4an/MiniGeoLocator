# Small-Location-Grabber
User Location Retrieval Script

Description:
This JavaScript file contains functions to retrieve a user's location based on their IP address using two external APIs. The file consists of three main functions:

1. getIPAddress(): Asynchronously fetches the user's IP address using the api.ipify.org service.
2. getLocationFromIP(ipAddress): Asynchronously retrieves the user's location information (city, region, country, latitude, longitude) by querying the ipapi.co service, using the provided IP address.
3. displayUserLocation(): Displays the user's location details on an HTML page, including the city, region, country, latitude, and longitude, or shows a message if the location is not available.

Usage:
To use this script, include it in an HTML file and ensure there are elements with the IDs 'ipAddress' and 'userLocation' where the IP address and location information will be displayed, respectively. Call the displayUserLocation() function to initiate the retrieval and display of the user's location.
