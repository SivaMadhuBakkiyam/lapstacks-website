import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import { LightHeroBackground } from "@/components/common/HeroBackground";
import { PageTransition, FadeInSection, StaggerContainer, StaggerItem } from "@/components/animations/PageTransition";
import { useBlogSearch } from "@/hooks/useBlogSearch";

const Blog = () => {
  const {
    posts,
    featuredPosts,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories
  } = useBlogSearch();

  const allPosts = posts.slice(3);

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <LightHeroBackground className="py-16">
          <div className="container-custom text-center">
            <FadeInSection>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4 bg-primary/10 px-4 py-1 rounded-full">
                Our blog
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
                Resources and insights
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                The latest industry news, interviews, technologies, and resources.
              </p>
            </FadeInSection>

            {/* Search Bar */}
            <FadeInSection delay={0.2}>
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-12 rounded-full bg-card border-border"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </FadeInSection>

            {/* Category Filters */}
            <FadeInSection delay={0.3}>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </FadeInSection>

            {searchTerm && (
              <FadeInSection delay={0.4}>
                <p className="text-sm text-muted-foreground mt-4">
                  Found {posts.length} posts matching "{searchTerm}"
                </p>
              </FadeInSection>
            )}
          </div>
        </LightHeroBackground>

        {/* Recent Posts */}
        <section className="section-padding">
          <div className="container-custom">
            <FadeInSection>
              <h2 className="text-xl font-bold mb-8">Recent blog posts</h2>
            </FadeInSection>
            
            {featuredPosts.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {/* Featured Large Post */}
                <FadeInSection>
                  <motion.article whileHover={{ y: -5 }} className="group">
                    <Link to={`/blog/${featuredPosts[0].id}`}>
                      <motion.img
                        whileHover={{ scale: 1.02 }}
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
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </h3>
                      <p className="text-muted-foreground mb-4">{featuredPosts[0].excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredPosts[0].tags.map((tag) => (
                          <span key={tag} className="badge-blue text-xs">{tag}</span>
                        ))}
                      </div>
                    </Link>
                  </motion.article>
                </FadeInSection>

                {/* Two Smaller Posts */}
                <div className="space-y-8">
                  {featuredPosts.slice(1).map((post, index) => (
                    <FadeInSection key={post.id} delay={index * 0.1}>
                      <motion.article whileHover={{ x: 5 }} className="group flex gap-6">
                        <Link to={`/blog/${post.id}`} className="flex gap-6">
                          <motion.img
                            whileHover={{ scale: 1.05 }}
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
                              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                    </FadeInSection>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            {allPosts.length > 0 && (
              <>
                <FadeInSection>
                  <h2 className="text-xl font-bold mb-8">All blog posts</h2>
                </FadeInSection>
                <StaggerContainer>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPosts.map((post) => (
                      <StaggerItem key={post.id}>
                        <motion.article whileHover={{ y: -5 }} className="group">
                          <Link to={`/blog/${post.id}`}>
                            <motion.img
                              whileHover={{ scale: 1.02 }}
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
                              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </>
            )}

            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="text-primary hover:underline mt-2"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {posts.length > 0 && (
              <div className="flex items-center justify-between mt-12">
                <motion.button
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Previous
                </motion.button>
                <div className="flex gap-2">
                  {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        page === 1 ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      {page}
                    </motion.button>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Next →
                </motion.button>
              </div>
            )}
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Blog;
