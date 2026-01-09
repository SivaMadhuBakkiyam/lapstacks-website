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

const allPosts: BlogPost[] = [
  {
    id: 1,
    title: "UX review presentations",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2025",
    image: blogImage1,
    authorImage: teamMember1,
    tags: ["Design", "Research", "Presentation"],
    category: "Design"
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    excerpt: "Linear helps streamline software projects, sprints, tasks, and bug. Letter spacing. Here's how to get...",
    author: "Phoenix Baker",
    date: "19 Jan 2025",
    image: blogImage2,
    authorImage: teamMember2,
    tags: ["Design", "Research"],
    category: "Product"
  },
  {
    id: 3,
    title: "Building your API Stack",
    excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...",
    author: "Lana Steiner",
    date: "18 Jan 2025",
    image: blogImage3,
    authorImage: teamMember3,
    tags: ["Design", "Research"],
    category: "Engineering"
  },
  {
    id: 4,
    title: "Bill Walsh leadership lessons",
    excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Alec Whitten",
    date: "17 Jan 2025",
    image: blogImage1,
    authorImage: teamMember1,
    tags: ["Leadership", "Management"],
    category: "Leadership"
  },
  {
    id: 5,
    title: "PM mental models",
    excerpt: "Mental models are simple expressions of complex processes or relationships.",
    author: "Demi Wilkinson",
    date: "16 Jan 2025",
    image: blogImage2,
    authorImage: teamMember4,
    tags: ["Product", "Research", "Frameworks"],
    category: "Product"
  },
  {
    id: 6,
    title: "What is Wireframing?",
    excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Candice Wu",
    date: "15 Jan 2025",
    image: blogImage3,
    authorImage: teamMember3,
    tags: ["Design", "Research"],
    category: "Design"
  },
  {
    id: 7,
    title: "How collaboration makes us better designers",
    excerpt: "Collaboration can make our teams stronger, and our individual designs better.",
    author: "Natali Craig",
    date: "14 Jan 2025",
    image: blogImage1,
    authorImage: teamMember1,
    tags: ["Design", "Research"],
    category: "Design"
  },
  {
    id: 8,
    title: "Our top 10 Javascript frameworks to use",
    excerpt: "JavaScript frameworks make development easy with extensive features and functionalities.",
    author: "Drew Cano",
    date: "13 Jan 2025",
    image: blogImage2,
    authorImage: teamMember2,
    tags: ["Software Development", "Tools", "SaaS"],
    category: "Engineering"
  },
  {
    id: 9,
    title: "Podcast: Creating a better CX Community",
    excerpt: "Starting a community doesn't need to be complicated, but how do you get started?",
    author: "Orlando Diggs",
    date: "12 Jan 2025",
    image: blogImage3,
    authorImage: teamMember4,
    tags: ["Podcasts", "Customer Success"],
    category: "Customer Success"
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
