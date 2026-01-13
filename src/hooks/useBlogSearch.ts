import { useState, useMemo } from "react";
import blogImage1 from "@/assets/blog-1.jpg";
import blogImage2 from "@/assets/blog-2.jpg";
import blogImage3 from "@/assets/blog-3.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  authorImage: string;
  tags: string[];
  category: string;
}

// Company-related blog posts
const allPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Lamstacks Revolutionized Tech Recruitment in 2024",
    excerpt: "Discover our innovative approach to connecting top tech talent with leading companies across India and beyond.",
    author: "Olivia Rhye",
    date: "20 Jan 2025",
    image: blogImage1,
    authorImage: teamMember1,
    tags: ["Recruitment", "Tech Industry", "Case Study"],
    category: "Company News"
  },
  {
    id: 2,
    title: "Cloud Migration Success: A Client Case Study",
    excerpt: "Learn how we helped a Fortune 500 company migrate their entire infrastructure to the cloud in just 3 months.",
    author: "Phoenix Baker",
    date: "19 Jan 2025",
    image: blogImage2,
    authorImage: teamMember2,
    tags: ["Cloud", "Case Study", "DevOps"],
    category: "Case Studies"
  },
  {
    id: 3,
    title: "The Future of AI in Enterprise: Lamstacks Vision",
    excerpt: "Our CEO shares insights on how artificial intelligence is transforming business operations and what's next.",
    author: "Lana Steiner",
    date: "18 Jan 2025",
    image: blogImage3,
    authorImage: teamMember3,
    tags: ["AI", "Innovation", "Leadership"],
    category: "Innovation"
  },
  {
    id: 4,
    title: "Building High-Performance DevOps Teams",
    excerpt: "Best practices and lessons learned from our experience building world-class DevOps capabilities for clients.",
    author: "Alec Whitten",
    date: "17 Jan 2025",
    image: blogImage1,
    authorImage: teamMember1,
    tags: ["DevOps", "Team Building", "Best Practices"],
    category: "Engineering"
  },
  {
    id: 5,
    title: "Why Companies Choose Lamstacks for Staff Augmentation",
    excerpt: "Understanding the key factors that make us a preferred partner for tech talent acquisition globally.",
    author: "Demi Wilkinson",
    date: "16 Jan 2025",
    image: blogImage2,
    authorImage: teamMember4,
    tags: ["Recruitment", "Staff Augmentation", "Business"],
    category: "Company News"
  },
  {
    id: 6,
    title: "Digital Transformation: A Roadmap for Success",
    excerpt: "Step-by-step guide to planning and executing your digital transformation journey with expert support.",
    author: "Candice Wu",
    date: "15 Jan 2025",
    image: blogImage3,
    authorImage: teamMember3,
    tags: ["Digital Transformation", "Strategy", "Consulting"],
    category: "Consulting"
  },
  {
    id: 7,
    title: "Lamstacks Engineering Culture: How We Build Great Products",
    excerpt: "An inside look at our engineering practices, team collaboration, and what makes our culture unique.",
    author: "Natali Craig",
    date: "14 Jan 2025",
    image: blogImage1,
    authorImage: teamMember1,
    tags: ["Engineering", "Culture", "Team"],
    category: "Company News"
  },
  {
    id: 8,
    title: "Scaling Your Startup with the Right Tech Stack",
    excerpt: "Expert advice on choosing technologies that will grow with your business from startup to enterprise.",
    author: "Drew Cano",
    date: "13 Jan 2025",
    image: blogImage2,
    authorImage: teamMember2,
    tags: ["Startups", "Tech Stack", "Growth"],
    category: "Engineering"
  },
  {
    id: 9,
    title: "Customer Success Stories: Real Impact, Real Results",
    excerpt: "Hear directly from our clients about how Lamstacks helped them achieve their technology goals.",
    author: "Orlando Diggs",
    date: "12 Jan 2025",
    image: blogImage3,
    authorImage: teamMember4,
    tags: ["Customer Success", "Testimonials", "Results"],
    category: "Case Studies"
  }
];

interface UseBlogSearchReturn {
  posts: BlogPost[];
  featuredPosts: BlogPost[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

export const useBlogSearch = (): UseBlogSearchReturn => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allPosts.map(post => post.category)));
    return ["All", ...cats];
  }, []);

  const posts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPosts = posts.slice(0, 3);

  return {
    posts,
    featuredPosts,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories
  };
};