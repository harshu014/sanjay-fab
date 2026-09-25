import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ImageCarousel from '../components/ImageCarousel';

const HomePage = () => {
  const topProducts = products.slice(0, 6);

  // Reviews Data
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Lucknow",
      rating: 5,
      comment: "Excellent quality metal pot tables! Very sturdy and well-finished.",
      avatar: "RK"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      comment: "The shelf rack we ordered was perfect for our store. Great craftsmanship!",
      avatar: "PS"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Mumbai",
      rating: 5,
      comment: "Best metal fabrication in Kanpur. Highly recommend for custom orders.",
      avatar: "AP"
    },
  ];

  const totalReviews = reviews.length;
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach(review => {
    ratingCounts[review.rating] = (ratingCounts[review.rating] || 0) + 1;
  });
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <>
      <ImageCarousel />

      {/* Top Products */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Top Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Premium quality metal fabrication products for your needs</p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProducts.map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.shortDesc}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                    <Link 
                      to={`/product/${product.id}`} 
                      className="bg-gray-800 hover:bg-red-500 hover:text-white text-white font-medium py-2 px-5 rounded-lg transition duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="bg-gray-800 hover:bg-red-500 hover:text-white text-white font-bold py-3 px-10 rounded-lg transition duration-300 inline-flex items-center gap-2"
            >
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real reviews from our valued customers</p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
                <div className="text-6xl font-bold text-gray-800">{averageRating}</div>
                <div className="text-2xl mt-2">{renderStars(5)}</div>
                <div className="text-gray-600 mt-2">Based on {totalReviews} reviews</div>
                
                <div className="mt-6 space-y-3 text-left">
                  {[5, 4, 3, 2, 1].map(rating => {
                    const count = ratingCounts[rating] || 0;
                    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                    return (
                      <div key={rating} className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-700 w-12">{rating} ⭐</span>
                        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-red-400 rounded-full transition-all duration-1000"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500 w-8">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white flex items-center justify-center font-bold text-lg">
                        {review.avatar}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-800">{review.name}</h4>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-sm text-gray-500">{review.location}</span>
                      </div>
                      <div className="text-lg">{renderStars(review.rating)}</div>
                      <p className="text-gray-700 mt-2 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;