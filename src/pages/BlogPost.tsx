import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { LightHeroBackground } from "@/components/common/HeroBackground";
import { PageTransition, FadeInSection } from "@/components/animations/PageTransition";
import blogImage1 from "@/assets/blog-1.jpg";
import blogImage2 from "@/assets/blog-2.jpg";
import blogImage3 from "@/assets/blog-3.jpg";

const blogPosts = [
  {
    id: "1",
    title: "UX review presentations: How to deliver impactful feedback",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    content: `
      <p>User experience (UX) design is a critical component of any successful digital product. But creating great designs is only half the battle – you also need to effectively communicate your design decisions and gather meaningful feedback from stakeholders.</p>
      
      <h2>Why UX Review Presentations Matter</h2>
      <p>A well-crafted UX review presentation can make the difference between a design that gets approved and one that gets sent back to the drawing board. Here are the key elements that make presentations impactful:</p>
      
      <h3>1. Start with Context</h3>
      <p>Before diving into your designs, set the stage by explaining the problem you're solving. Share user research insights, business goals, and any constraints you're working within. This helps stakeholders understand the "why" behind your design decisions.</p>
      
      <h3>2. Tell a Story</h3>
      <p>Don't just show screens – take your audience on a journey. Walk them through the user flow, explaining what happens at each step and why. This narrative approach keeps people engaged and helps them see the design from the user's perspective.</p>
      
      <h3>3. Highlight Key Decisions</h3>
      <p>Call out the most important design decisions you made and explain your reasoning. Did you choose a particular layout for accessibility reasons? Did user testing inform a specific interaction pattern? Share these insights to build credibility.</p>
      
      <h3>4. Anticipate Questions</h3>
      <p>Think about the questions stakeholders might ask and prepare answers in advance. This shows you've thought deeply about the design and builds confidence in your recommendations.</p>
      
      <h3>5. Guide the Feedback</h3>
      <p>Be specific about what kind of feedback you're looking for. Are you seeking input on the overall concept, or fine-tuning specific interactions? Directing the conversation helps you get more actionable insights.</p>
      
      <h2>Best Practices for Remote Presentations</h2>
      <p>With many teams working remotely, delivering UX presentations virtually has become the norm. Here are some tips:</p>
      
      <ul>
        <li>Use screen sharing with annotation tools</li>
        <li>Build in pauses for questions and discussion</li>
        <li>Record the session for team members who can't attend</li>
        <li>Follow up with a summary document</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mastering UX review presentations is a skill that takes practice, but it's invaluable for advancing your design career and getting buy-in for your ideas. Start implementing these techniques in your next presentation and watch your impact grow.</p>
    `,
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    readTime: "5 min read",
    tags: ["Design", "Research", "Presentation"],
    image: blogImage1
  },
  {
    id: "2",
    title: "Migrating to Linear 101: A comprehensive guide",
    excerpt: "Linear is a popular project management tool for software teams. Here's how to make the switch.",
    content: `
      <p>If you're considering moving your team to Linear, you're in good company. Many fast-growing tech companies have made the switch from traditional project management tools to Linear's streamlined interface.</p>
      
      <h2>Why Teams Choose Linear</h2>
      <p>Linear has gained popularity for several reasons:</p>
      <ul>
        <li>Lightning-fast performance</li>
        <li>Keyboard-first design</li>
        <li>Beautiful, minimal interface</li>
        <li>Powerful automation</li>
        <li>Seamless GitHub integration</li>
      </ul>
      
      <h2>Planning Your Migration</h2>
      <p>Before you start migrating, take time to plan the process carefully. Here's a checklist to get you started...</p>
    `,
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    readTime: "8 min read",
    tags: ["Software Development", "Tools", "SaaS"],
    image: blogImage2
  },
  {
    id: "3",
    title: "Building your API stack for scale",
    excerpt: "The rise of RESTful APIs has been remarkable. Here's how to build a stack that scales.",
    content: `
      <p>Building APIs that can handle growth is one of the biggest challenges facing modern development teams...</p>
    `,
    author: "Lana Steiner",
    date: "18 Jan 2024",
    readTime: "10 min read",
    tags: ["Software Development", "API", "Scaling"],
    image: blogImage3
  }
];

const relatedPosts = [
  { id: "2", title: "Migrating to Linear 101", author: "Phoenix Baker", date: "19 Jan 2024", image: blogImage2 },
  { id: "3", title: "Building your API stack", author: "Lana Steiner", date: "18 Jan 2024", image: blogImage3 },
  { id: "1", title: "UX review presentations", author: "Olivia Rhye", date: "20 Jan 2024", image: blogImage1 }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id) || blogPosts[0];

  const shareUrl = window.location.href;
  const shareLinks = [
    { name: "LinkedIn", icon: Linkedin, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { name: "Twitter", icon: Twitter, url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}` },
    { name: "Facebook", icon: Facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` }
  ];

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <LightHeroBackground className="py-12 md:py-16">
          <div className="container-custom">
            <FadeInSection>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <div className="max-w-3xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge-blue text-xs">{tag}</span>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </LightHeroBackground>

        {/* Article Content */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-3"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full aspect-video object-cover rounded-2xl mb-8"
                />
                
                <article 
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Share2 className="w-5 h-5" />
                      <span className="font-medium">Share this article</span>
                    </div>
                    <div className="flex gap-3">
                      {shareLinks.map((link) => (
                        <motion.a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <link.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                {/* Author Card */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold mb-4 text-foreground">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{post.author}</p>
                      <p className="text-sm text-muted-foreground">Content Writer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Writing about technology, design, and productivity to help teams work better.
                  </p>
                </div>

                {/* Related Posts */}
                <div>
                  <h3 className="font-bold mb-4 text-foreground">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.filter(p => p.id !== id).slice(0, 3).map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <motion.div 
                          whileHover={{ x: 5 }}
                          className="flex gap-4"
                        >
                          <img 
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div>
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors text-foreground">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {relatedPost.author} • {relatedPost.date}
                            </p>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="font-bold mb-2 text-foreground">Subscribe to our newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest articles and insights delivered to your inbox.
                  </p>
                  <Button className="w-full rounded-full">
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default BlogPost;
