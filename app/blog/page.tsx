export default function Blog() {
  const blogs = [
    { title: "Benefits of Outdoor Gyms", date: "Dec 2025", excerpt: "How local communities are staying fit with DD Fibrotech equipment..." },
    { title: "Fiber vs Steel Dustbins", date: "Nov 2025", excerpt: "Why FRP dustbins are the better choice for Indian parks..." }
  ];

  return (
    <main className="pt-32 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-black mb-16">Latest Updates</h1>
      <div className="space-y-12">
        {blogs.map(blog => (
          <div key={blog.title} className="group cursor-pointer">
            <p className="text-orange-600 font-bold text-sm mb-2">{blog.date}</p>
            <h2 className="text-3xl font-bold group-hover:underline">{blog.title}</h2>
            <p className="text-slate-500 mt-4">{blog.excerpt}</p>
            <div className="h-[1px] w-full bg-slate-100 mt-12" />
          </div>
        ))}
      </div>
    </main>
  );
}