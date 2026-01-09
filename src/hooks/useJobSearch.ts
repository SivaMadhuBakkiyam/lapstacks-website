import { useState, useMemo } from "react";

export interface Job {
  id: number;
  title: string;
  location: string;
  experience: string;
  salary: string;
  tags: string[];
  posted: string;
  type: string;
  mode: string;
  industry: string;
}

const allJobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    location: "Remote, India",
    experience: "3 - 7 experience",
    salary: "₹25-35 LPA",
    tags: ["Engineering", "Full-time", "Urgently hiring"],
    posted: "1 day ago",
    type: "Full-time",
    mode: "Remote",
    industry: "Information Technology"
  },
  {
    id: 2,
    title: "Enterprise Sales Executive",
    location: "Delhi, India",
    experience: "3 - 7 experience",
    salary: "₹8-12 LPA + Commission",
    tags: ["Sales", "Freelance", "Urgently hiring"],
    posted: "1 day ago",
    type: "Freelance",
    mode: "On-site",
    industry: "Non IT"
  },
  {
    id: 3,
    title: "Product Manager",
    location: "Chennai, Bangalore, India",
    experience: "3 - 7 experience",
    salary: "₹25-35 LPA",
    tags: ["Sales", "Full-time", "Urgently hiring"],
    posted: "1 day ago",
    type: "Full-time",
    mode: "Hybrid",
    industry: "Information Technology"
  },
  {
    id: 4,
    title: "UX/UI Designer",
    location: "Mumbai, India",
    experience: "3 - 7 experience",
    salary: "Not Disclosed",
    tags: ["Design", "Internship", "Urgently hiring"],
    posted: "1 day ago",
    type: "Internship",
    mode: "On-site",
    industry: "Information Technology"
  },
  {
    id: 5,
    title: "Data Scientist",
    location: "Remote, US/EU",
    experience: "3 - 7 experience",
    salary: "$100,000-$150,000",
    tags: ["Data Science", "Full-time", "Urgently hiring"],
    posted: "1 day ago",
    type: "Full-time",
    mode: "Remote",
    industry: "Information Technology"
  },
  {
    id: 6,
    title: "Backend Developer",
    location: "Bengaluru, India",
    experience: "2 - 5 experience",
    salary: "₹18-28 LPA",
    tags: ["Engineering", "Full-time", "Urgently hiring"],
    posted: "2 days ago",
    type: "Full-time",
    mode: "Hybrid",
    industry: "Information Technology"
  },
  {
    id: 7,
    title: "DevOps Engineer",
    location: "Hyderabad, India",
    experience: "4 - 8 experience",
    salary: "₹22-35 LPA",
    tags: ["Engineering", "Contract", "Urgently hiring"],
    posted: "3 days ago",
    type: "Contract",
    mode: "Remote",
    industry: "Information Technology"
  }
];

interface UseJobSearchReturn {
  jobs: Job[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedModes: string[];
  setSelectedModes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLocations: string[];
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>;
  selectedIndustries: string[];
  setSelectedIndustries: React.Dispatch<React.SetStateAction<string[]>>;
  clearFilters: () => void;
  totalJobs: number;
}

export const useJobSearch = (): UseJobSearchReturn => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  const jobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesSearch = searchTerm === "" || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);
      const matchesMode = selectedModes.length === 0 || selectedModes.includes(job.mode);
      const matchesLocation = selectedLocations.length === 0 || 
        selectedLocations.some(loc => job.location.toLowerCase().includes(loc.toLowerCase()));
      const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(job.industry);

      return matchesSearch && matchesType && matchesMode && matchesLocation && matchesIndustry;
    });
  }, [searchTerm, selectedTypes, selectedModes, selectedLocations, selectedIndustries]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTypes([]);
    setSelectedModes([]);
    setSelectedLocations([]);
    setSelectedIndustries([]);
  };

  return {
    jobs,
    searchTerm,
    setSearchTerm,
    selectedTypes,
    setSelectedTypes,
    selectedModes,
    setSelectedModes,
    selectedLocations,
    setSelectedLocations,
    selectedIndustries,
    setSelectedIndustries,
    clearFilters,
    totalJobs: allJobs.length
  };
};
