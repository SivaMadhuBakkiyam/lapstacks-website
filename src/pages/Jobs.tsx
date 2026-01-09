import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/layout/Layout";
import { LightHeroBackground } from "@/components/common/HeroBackground";
import { PageTransition, FadeInSection, StaggerContainer, StaggerItem } from "@/components/animations/PageTransition";
import { useJobSearch } from "@/hooks/useJobSearch";

const jobTypes = ["Full-time", "Internship", "Contract", "Freelance"];
const workModes = ["On-site", "Hybrid", "Remote"];
const locations = [
  { name: "Bengaluru", count: 19 },
  { name: "Chennai", count: 1 },
  { name: "Coimbatore", count: 1 },
  { name: "Delhi", count: 1 },
  { name: "Hyderabad", count: 4 }
];
const industries = [
  { name: "Information Technology", count: 21 },
  { name: "Non IT", count: 17 },
  { name: "Other", count: 12 },
  { name: "Consulting", count: 13 },
  { name: "Real Estate", count: 2 }
];

const getTagColor = (tag: string) => {
  if (tag.includes("Full-time")) return "badge-blue";
  if (tag.includes("Urgently")) return "badge-orange";
  if (tag.includes("Freelance")) return "badge-green";
  if (tag.includes("Internship")) return "badge-blue";
  return "badge-gray";
};

const Jobs = () => {
  const {
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
    totalJobs
  } = useJobSearch();

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <LightHeroBackground className="py-16">
          <div className="container-custom text-center">
            <FadeInSection>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Find Your Dream Opportunity
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Looking for jobs? Browse our latest job openings to view & apply to the best jobs today!
              </p>
            </FadeInSection>

            {/* Search Bar */}
            <FadeInSection delay={0.2}>
              <div className="max-w-3xl mx-auto bg-card rounded-full shadow-lg border border-border p-2 flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 px-4">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search Job title, Keyword..."
                    className="border-0 focus-visible:ring-0 bg-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="hidden md:flex items-center gap-2 px-4 border-l border-border">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Location</span>
                </div>
                <div className="hidden md:flex items-center gap-2 px-4 border-l border-border">
                  <Briefcase className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Experience</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
                  Find Job
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <p className="text-sm text-muted-foreground mt-4">
                Showing {jobs.length} of {totalJobs} jobs
              </p>
            </FadeInSection>
          </div>
        </LightHeroBackground>

        {/* Jobs Content */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1 space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">Filters</h3>
                  <button onClick={clearFilters} className="text-primary text-sm font-medium hover:underline">
                    Clear All
                  </button>
                </div>

                {/* Date Post */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground">Date Post</h4>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors">
                    <span>Anytime</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Job Type */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground">Job type</h4>
                  <div className="space-y-3">
                    {jobTypes.map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedTypes([...selectedTypes, type]);
                            } else {
                              setSelectedTypes(selectedTypes.filter((t) => t !== type));
                            }
                          }}
                        />
                        <span className="text-sm group-hover:text-primary transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Work Mode */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground">On-site/remote</h4>
                  <div className="space-y-3">
                    {workModes.map((mode) => (
                      <label key={mode} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedModes.includes(mode)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedModes([...selectedModes, mode]);
                            } else {
                              setSelectedModes(selectedModes.filter((m) => m !== mode));
                            }
                          }}
                        />
                        <span className="text-sm group-hover:text-primary transition-colors">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground">Location</h4>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search Location" className="pl-10" />
                  </div>
                  <div className="space-y-3">
                    {locations.map((loc) => (
                      <label key={loc.name} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={selectedLocations.includes(loc.name)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedLocations([...selectedLocations, loc.name]);
                              } else {
                                setSelectedLocations(selectedLocations.filter((l) => l !== loc.name));
                              }
                            }}
                          />
                          <span className="text-sm group-hover:text-primary transition-colors">{loc.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({loc.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Industry */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-muted-foreground">Industry</h4>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search Industry" className="pl-10" />
                  </div>
                  <div className="space-y-3">
                    {industries.map((ind) => (
                      <label key={ind.name} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={selectedIndustries.includes(ind.name)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedIndustries([...selectedIndustries, ind.name]);
                              } else {
                                setSelectedIndustries(selectedIndustries.filter((i) => i !== ind.name));
                              }
                            }}
                          />
                          <span className="text-sm group-hover:text-primary transition-colors">{ind.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({ind.count})</span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Job Listings */}
              <div className="lg:col-span-3 space-y-4">
                <StaggerContainer>
                  {jobs.length === 0 ? (
                    <div className="text-center py-12 bg-card rounded-xl border border-border">
                      <p className="text-muted-foreground">No jobs found matching your criteria.</p>
                      <Button onClick={clearFilters} variant="link" className="mt-2">
                        Clear filters
                      </Button>
                    </div>
                  ) : (
                    jobs.map((job) => (
                      <StaggerItem key={job.id}>
                        <motion.div
                          whileHover={{ scale: 1.01, x: 5 }}
                          className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all"
                        >
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-2">
                              <h3 className="text-lg font-bold">{job.title}</h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Briefcase className="w-4 h-4" />
                                  {job.experience}
                                </span>
                                <span>$ {job.salary}</span>
                              </div>
                              <div className="flex flex-wrap gap-2 pt-2">
                                {job.tags.map((tag) => (
                                  <span key={tag} className={getTagColor(tag)}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Link
                                to={`/jobs/${job.id}`}
                                className="text-primary font-medium hover:underline"
                              >
                                View Details
                              </Link>
                              <span className="text-xs text-muted-foreground">{job.posted}</span>
                            </div>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))
                  )}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Post Jobs CTA */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="gradient-cta rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
            >
              <div className="text-primary-foreground">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Post Your Jobs<br />& Internships
                </h2>
                <p className="text-primary-foreground/80 max-w-md">
                  Find the right candidate from a diverse talent pool for your role.
                </p>
              </div>
              <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
                <Link to="/contact">Post Jobs Now</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Jobs;
