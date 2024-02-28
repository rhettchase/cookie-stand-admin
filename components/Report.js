export default function Report({ location, min_customers, max_customers, avg_cookies }) {
    const lastCreated = JSON.stringify({
      location,
      min_customers,
      max_customers,
      avg_cookies,
    }, null, 2); // Pretty print the JSON string
  
    return (
      <pre>{lastCreated}</pre> // Use <pre> for formatted display
    );
  }