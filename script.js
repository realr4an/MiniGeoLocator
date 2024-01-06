// Function to fetch IP address from an API
async function getIPAddress() {
  try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
  } catch (error) {
      console.log('Error fetching IP address:', error);
      return 'Could not fetch IP';
  }
}

// Function to fetch user's location based on IP address
async function getLocationFromIP(ipAddress) {
  try {
      const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
      const data = await response.json();
      return {
          city: data.city,
          region: data.region,
          country: data.country_name,
          latitude: data.latitude,
          longitude: data.longitude
      };
  } catch (error) {
      console.log('Error fetching location:', error);
      return {
          city: 'Unknown',
          region: 'Unknown',
          country: 'Unknown',
          latitude: null,
          longitude: null
      };
  }
}

// Display user's location
async function displayUserLocation() {
  const locationElement = document.getElementById('userLocation');

  const ipAddress = await getIPAddress();
  const locationData = await getLocationFromIP(ipAddress);
  const { city, region, country, latitude, longitude } = locationData;

  if (latitude && longitude) {
      locationElement.textContent = `Your Location: ${city}, ${region}, ${country} (Lat: ${latitude}, Long: ${longitude})`;
  } else {
      locationElement.textContent = `Location not available`;
  }

  // Save location data in localStorage
  localStorage.setItem('userLocation', JSON.stringify(locationData));
}

// Call the function to display the user's location
displayUserLocation();
