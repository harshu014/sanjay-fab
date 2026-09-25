import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const relatedProducts = products.filter(p => p.id !== parseInt(id)).slice(0, 3);

  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center text-2xl">Product not found!</div>;
  }

  const whatsappLink = `https://wa.me/${product.whatsappNumber}?text=Hello%2C%20I%27m%20interested%20in%20your%20product%3A%20${encodeURIComponent(product.name)}`;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img src={product.images[0]} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
            <div className="flex mt-4 space-x-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <img key={index} src={img} alt={`${product.name} view ${index+1}`} className="w-20 h-20 object-cover rounded border border-gray-200 cursor-pointer hover:border-red-500" />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
            <p className="text-3xl font-bold text-red-600 mb-4">{product.price}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            
            {product.specifications && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-2 font-medium text-gray-700 border-b border-gray-200">{key}</td>
                          <td className="px-4 py-2 text-gray-600 border-b border-gray-200">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2 w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Connect Now on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(relProduct => (
              <div key={relProduct.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={relProduct.images[0]} alt={relProduct.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">{relProduct.name}</h4>
                  <p className="text-red-600 font-bold mt-1">{relProduct.price}</p>
                  <Link to={`/product/${relProduct.id}`} className="mt-2 inline-block bg-gray-700 hover:bg-red-500 hover:text-white text-white text-sm font-medium py-1 px-3 rounded transition duration-300">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;