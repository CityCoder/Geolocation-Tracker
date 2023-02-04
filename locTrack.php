// API endpoint to get products based on the user's location
public function get_products()
{
  // Get the lat and long parameters from the URL
  $lat = Input::get('lat');
  $long = Input::get('long');
  
  // Query the database to get products based on the user's location
  $products = DB::select(
    'SELECT * FROM products WHERE lat BETWEEN ? AND ? AND long BETWEEN ? AND ?',
    [$lat - 0.1, $lat + 0.1, $long - 0.1, $long + 0.1]
  );
  
  // Return the products as JSON
  return $this->response($products);
}
