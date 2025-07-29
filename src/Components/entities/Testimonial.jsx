export function Testimonial({ name, service, comment, rating }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-4">"{comment}"</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>— {name}</span>
        {service && (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
            {service.replace('_', ' ')}
          </span>
        )}
        <span className="flex space-x-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.96c.3.922-.755 1.688-1.538 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.036 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.959z" />
              </svg>
            ))}
        </span>
      </div>
    </div>
  );
};

// Mock testimonials matching form data fields
const mockTestimonials = [
  {
    id: 1,
    name: "Sylvia Njoki",
    service: "project_management",
    comment: "Working with this developer was a seamless experience. The results exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Daniel Otieno",
    service: "learning_management_system",
    comment: "Highly skilled in both frontend and backend. Delivered a clean and functional LMS in record time.",
    rating: 4,
  },
  {
    id: 3,
    name: "Grace Kimani",
    service: "company_website",
    comment: "Great communication and timely delivery. The company site he built significantly boosted our online presence.",
    rating: 5,
  },
];

// Static methods on the component
Testimonial.list = async (ordering = "-created_date", limit = 6) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockTestimonials.slice(0, limit);
};

Testimonial.create = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  mockTestimonials.unshift({ id: Date.now(), ...data });
  return { success: true, message: "Testimonial added" };
};
