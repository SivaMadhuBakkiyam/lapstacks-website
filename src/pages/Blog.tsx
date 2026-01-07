import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import blogImage1 from "@/assets/blog-1.jpg";
import blogImage2 from "@/assets/blog-2.jpg";
import blogImage3 from "@/assets/blog-3.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const featuredPosts = [
  {
    id: 1,
    title: "UX review presentations",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2025",
    image: blogImage1,
    authorImage: teamMember1,
    tags: ["Design", "Research", "Presentation"]
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    excerpt: "Linear helps streamline software projects, sprints, tasks, and bug. Letter spacing. Here's how to get...",
    author: "Phoenix Baker",
    date: "19 Jan 2025",
    image: blogImage2,
    authorImage: teamMember2,
    tags: ["Design", "Research"]
  },
  {
    id: 3,
    title: "Building your API Stack",
    excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...",
    author: "Lana Steiner",
    date: "18 Jan 2025",
    image: blogImage3,
    authorImage: teamMember3,
    tags: ["Design", "Research"]
  }
];

const allPosts = [
  {
    id: 4,
    title: "Bill Walsh leadership lessons",
    excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Alec Whitten",
    date: "17 Jan 2025",
    image: blogImage1,
    authorImage: teamMember1,
    tags: ["Leadership", "Management"]
  },
  {
    id: 5,
    title: "PM mental models",
    excerpt: "Mental models are simple expressions of complex processes or relationships.",
    author: "Demi Wilkinson",
    date: "16 Jan 2025",
    image: blogImage2,
    authorImage: teamMember4,
    tags: ["Product", "Research", "Frameworks"]
  },
  {
    id: 6,
    title: "What is Wireframing?",
    excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Candice Wu",
    date: "15 Jan 2025",
    image: blogImage3,
    authorImage: teamMember3,
    tags: ["Design", "Research"]
  },
  {
    id: 7,
    title: "How collaboration makes us better designers",
    excerpt: "Collaboration can make our teams stronger, and our individual designs better.",
    author: "Natali Craig",
    date: "14 Jan 2025",
    image: blogImage1,
    authorImage: teamMember1,
    tags: ["Design", "Research"]
  },
  {
    id: 8,
    title: "Our top 10 Javascript frameworks to use",
    excerpt: "JavaScript frameworks make development easy with extensive features and functionalities.",
    author: "Drew Cano",
    date: "13 Jan 2025",
    image: blogImage2,
    authorImage: teamMember2,
    tags: ["Software Development", "Tools", "SaaS"]
  },
  {
    id: 9,
    title: "Podcast: Creating a better CX Community",
    excerpt: "Starting a community doesn't need to be complicated, but how do you get started?",
    author: "Orlando Diggs",
    date: "12 Jan 2025",
    image: blogImage3,
    authorImage: teamMember4,
    tags: ["Podcasts", "Customer Success"]
  }
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-diagonal py-16">
        <div className="container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Our blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6"
          >
            Resources and insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            The latest industry news, interviews, technologies, and resources.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-12 rounded-full bg-card border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-8">Recent blog posts</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Featured Large Post */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/blog/${featuredPosts[0].id}`}>
                <img
                  src={featuredPosts[0].image}
                  alt={featuredPosts[0].title}
                  className="w-full aspect-[4/3] object-cover rounded-2xl mb-6"
                />
                <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <span>{featuredPosts[0].author}</span>
                  <span>•</span>
                  <span>{featuredPosts[0].date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {featuredPosts[0].title}
                  <ArrowUpRight className="w-5 h-5" />
                </h3>
                <p className="text-muted-foreground mb-4">{featuredPosts[0].excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {featuredPosts[0].tags.map((tag) => (
                    <span key={tag} className="badge-blue text-xs">{tag}</span>
                  ))}
                </div>
              </Link>
            </motion.article>

            {/* Two Smaller Posts */}
            <div className="space-y-8">
              {featuredPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-6"
                >
                  <Link to={`/blog/${post.id}`} className="flex gap-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-40 h-32 object-cover rounded-xl flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 text-sm text-primary mb-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        {post.title}
                        <ArrowUpRight className="w-4 h-4" />
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="badge-blue text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <h2 className="text-xl font-bold mb-8">All blog posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[4/3] object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {post.title}
                    <ArrowUpRight className="w-4 h-4" />
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className={`text-xs ${tag === "Software Development" || tag === "Tools" || tag === "SaaS" ? "badge-orange" : tag === "Leadership" || tag === "Management" ? "badge-green" : tag === "Podcasts" || tag === "Customer Success" ? "badge-gray" : "badge-blue"}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-12">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              ← Previous
            </button>
            <div className="flex gap-2">
              {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    page === 1 ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              Next →
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
